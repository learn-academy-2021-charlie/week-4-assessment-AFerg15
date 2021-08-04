# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: Instance variables in Ruby are variables that are denoted with an @ that store information about they class they are stored within.

  Researched answer: In Ruby, instance variables (denoted witn an @) store information about the class they are held within. These variables can only be referenced within class methods. For example, a class called Houseplants could have instance variables for @type, @color, @size etc. where each instance of the class Houseplants could make use of them. For instance (<---punny) if two objects were created from that class (ex. monstera and calathea) they could hold different values for the instance variables.



2. What is a block in Ruby?

  Your answer: Blocks are chunks of code like functions. 

  Researched answer: In Ruby, blocks are chunks of code/functions that can be passed into methods, they can have arguments defined by |pipes|.



3. Ruby has an implicit return. What does that mean?

  Your answer: Implicit returns are like automatic returns, it's not necessary to use 'return' because the result will be returned implicitly.

  Researched answer: Unlike with Javascript, where a function will return 'undefined' unless told explicitly to return something, Ruby will return the result of the last line/expression, this is an implicit return.



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming uses classes and objects to create reusable blueprints for code. Unlike functinal programming, data can be stored in objects.

  Researched answer: The primary difference between object-oriented programming and functional programming is that object-oriented programming relies on the concept of classes and objects, where data can be stored whereas functional programming is based on the evaluation of functions using immutable data.



5. What is the difference between a class and an object?

  Your answer: A class is a blueprint for an object. 

  Researched answer: A class is a reusable blueprint for an object, multiple objects can be created by a class, but each object can hold unique data. For instance, if 'Vehicle' was a class, an object could be created for sedan, truck, suv, farm implement, monster truck, etc. 



6. STRETCH: What is `attr_accessor`?

  Your answer: In Ruby, attr_accessor is a method whose job is to create new methods.

  Researched answer: In Ruby, attr_accessor is a method whose job is to create new methods, for example: if you have a class called 'dog' you could define an instance variable for '@breed', using attr_accessor would allow you to both read and write the name of the breed of the class 'dog'.



## Looking Ahead: Terms for Next Week

1. PostgreSQL:
 
2. Ruby on Rails:

3. CRUD:

4. ORM:

5. Active Record:
