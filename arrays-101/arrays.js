// 2.0 create an array with no elements inside of it, log the array
let array1 = [];
console.log(array1); // Output: []

// 2.1 use array.push to add a number to the array, log the array
array1.push(15);
console.log(array1); // Output: [15]

// 2.2 create a new array with a number already inside of it, log the array
let array2 = [5];
console.log(array2); // Output: [5]
// 2.3 use array.pop to remove an element from the back of the array
array2.pop();
console.log(array2); // Output: []
// 2.4 push two more numbers into your array
array2.push(9, 17);
console.log(array2); // Output: [9, 17]
// 2.5 use spread syntax to combine arrays from above problems, log the results
let combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [15, 9, 17]
// 2.6 use array.find to locate one of the elements in your array, log the located result
let foundElement = combinedArray.find(element => element === 9);
console.log(foundElement); // Output: 9
// 2.7 use array.every to determine if every single number is above "5", log the result
let allAboveFive = combinedArray.every(element => element > 5);
console.log(allAboveFive); // Output: false (since 9 > 5 but 15 and 17 are fine)

// 2.8 use array.filter to remove any numbers smaller than 5, log the result
let filteredArray = combinedArray.filter(element => element >= 5);
console.log(filteredArray); // Output: [15rewaterswater

// 2.9 use array.sort to sort the items from smallest to largest
let sortedArray = combinedArray.sort((a, b) => a - b);
console.log(sortedArray); // Output: [9, 15, 17]

// 2.91 use array.reverse to reverse the items so that they are now largest to smallest
let reversedArray = sortedArray.reverse();
console.log(reversedArray); // Output: [17, 15, 9]

// 2.92 use array.reduce to sum up the entire list of numbers in the array
let sum = reversedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 41

// 2.93 use array.map to scale each number in the array up by a factor of 10
let scaledArray = reversedArray.map(num => num * 10);
console.log(scaledArray); // Output: [170, 150, 90]
