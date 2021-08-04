// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// create a function - shuffleArr
// parameter - array
// process:
    //use something to remove first item from array
    //use something to randomize

describe("shuffleArr", () => {
    it("removes the first item from the array and shuffles the remaining content.", () => {
        expect(shuffleArr(colors1).sort()).toEqual(["blue", "green", "pink", "yellow"])
    })
})


// b) Create the function that makes the test pass.

const shuffleArr = (array) => {
// remove first item in array
    array.shift()
// start at end of array
    var currentIndex = array.length,  randomIndex;
// iterates and sets exit condition (works backwards until it hits zero and stops)
  while (0 !== currentIndex) {
 // use randomIndex to populate, where randomIndex is any number between 0 and current iteration (moving backwards)
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--; //(iterating backwards same as i--)
// while iterating through array, look only at these two indices and flip them working backwards to zero
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
describe("miniMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
        expect(miniMax(nums1)).toEqual([-8,90])
    })
})
// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]



// b) Create the function that makes the test pass.
// create a function - miniMax
// parameter - array
// process:
    //sort array from < to >
    // take first and last index for output

const miniMax = (array) => {
    array.sort((a, b) =>  a - b)
    //array.length-1 because array.length returns total number of items in array
    return [array[0], array[array.length-1]]
}
console.log(miniMax(nums1))



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.



// a) Create a test with an expect statement using the variables provided.
describe("noDupes", (array1, array2) => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        expect(noDupes(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
    })

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.
// create a function - noDupes
// parameter - two arrays
//Process:
    // combine two arrays using .concat
    // remove duplicate values using .includes/.filter

    // const noDupes = (array1, array2) => {
    //     let newArray = array1.concat(array2)
    //     let output = []
    //     output = newArray.filter((value) => {
    //         if (output.includes(value)===false){
    //         return value
    //         }
    //     })
    //     return output
    // }
    // console.log(noDupes(testArray1, testArray2))

    const noDupes = (array1, array2) => {
        //combining values from both arrays into 1 array
        let newArray = array1.concat(array2)
        //create empty array to push values into after iteration
        let output = []
        //iterate through new array to check at each index whether a value exists in the output array
        for(let i=0; i<newArray.length; i++)
        //if the value exists, don't add it, if the value doesn't exist, push into output array
            if (output.includes(newArray[i])===false){
            output.push(newArray[i])
        }
        return output
    }
    console.log(noDupes(testArray1, testArray2))
    //----->   [
    //   3, 7, 10, 5,
    //   4, 8,  2, 1
    // ]
    //I still don't understand why it returns in this way instead of inline

//Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total