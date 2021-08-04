# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

# create a method - letterSelect
# parameter - array, letter
# Process
    # Take in an array of words
    # iterate
    # return only words with the letter declared
        #use include?(letter)

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# takes array and letter as arguments
        def letter_select array, letter
            # iterates
            array.each do |value|
                # checks for letter at each index
                if value.include?(letter)
                    # if letter is included in value at index, puts value
                    puts value
                end
            end
        end
        p letter_select beverages_array, letter_o
        # wrong number of arguments (given 0, expected 2)
            # remove comma after letter_select line 27
                # coffee
                # soda water
                # ["coffee", "tea", "juice", "water", "soda water"]

    
                

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# create a method - vwl_rmv
# parameter - string
#process 
        # take string and evaluate for vowels
        # remove vowels
            # use string.delete!
        # return string

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vwl_rmv string
    string.delete!('aeiou')
end
p vwl_rmv album1
# --->"Rbbr Sl"
# it works, but wouldn't work if vowels were capitalized.

def vwl_rmv string
    string.delete!('aeiou')
end
p vwl_rmv album3.downcase
# "bby rd" --- works, but .downcase should be part of method

# takes in string 
def vwl_rmv string
    # .downcase changes to lowercase, .delete! removes vowels
    string.downcase.delete!('aeiou')
end
p vwl_rmv album3


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# create a class - Bike
# initialize w model, wheels and current speed
    # default num wheels = 2
    #current speed = 0
# create get_info method 
    # returns sentence w data from object

class Bike
    def initialize model
        # it finally clicked that I'm initializing model as an argument (changable) on line 91, and setting @model = 'whatever is put in as the argument' on line 93, so it can be placed in the @get_info using the ('argument') in line 101
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def get_info
        @get_info = "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed}"
    end
end
bike = Bike.new('Trek')
p bike.get_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

#  add methods to class Bike
    # pedal_faster & brake
        #takes integer as argument
        # use if statement to prevent negative speed
        # both need to set @current_speed to return get_info correctly

class Bike
    def initialize model
        @model = model
        @wheels = 2
        @current_speed = 0
        end
    def pedal_faster speed
        @current_speed += speed 
    end
    def brake brake_strength
        # tried combining methods to take in speed / brake strength as arguments but it kept returning the speed doubled
        # separated into two methods and removed methods from get_info
        if @current_speed - brake_strength < 0
            @current_speed = 0
        else
            @current_speed -= brake_strength
        end
    end
    def get_info
        @get_info = "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed}"
    end
end
my_bike = Bike.new('Trek')
my_bike.pedal_faster 10
my_bike.brake 15
p my_bike.get_info
# "The Trek bike has 2 wheels and is going 30" ---arguments in the wrong place? --- refactored to remove methods from get_info
# my_bike = Bike.new('Trek')
# my_bike.pedal_faster 10
# my_bike.brake 15
# p my_bike.get_info
# "The Trek bike has 2 wheels and is going 0"