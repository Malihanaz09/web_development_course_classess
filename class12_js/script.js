// function 
function add(){
    console.log(2 + 9);
}
add();

// function with parameters
function addNumbers(a, b) {
   return console.log(a + b);
}
addNumbers(5, 10); // Outputs: 15

// arrow function
const subArrow = (a, b) => {
    return console.log(a - b);
}
subArrow(10, 5); // Outputs: 5

// array methods
let numbers = [1, 2, 3, 4, 5];
console.log("Original Array:", numbers);
console.log("Array Length:", numbers.length); // Outputs: 5
console.log("Array Element at Index 3:", numbers[3]); // Outputs: 3

// Adding an element to the array in the end
numbers.push(6);
console.log("After Push:", numbers); // Outputs: [1, 2, 3, 4, 5, 6]

//adding an element to the array in the beginning
numbers.unshift(0);
console.log("After Unshift:", numbers); // Outputs: [0, 1, 2, 3, 4, 5, 6]

// Removing the last element from the array
numbers.pop();
console.log("After Pop:", numbers); // Outputs: [0, 1, 2, 3, 4, 5]

// Removing the first element from the array
numbers.shift();
console.log("After Shift:", numbers); // Outputs: [1, 2, 3, 4, 5]

// filtering an array
let filteredNumbers = numbers.filter(num => num > 2);
console.log("Filtered Numbers (greater than 2):", filteredNumbers); // Outputs: [3, 4, 5]

//mapping an array
let mappedNumbers = numbers.map(num => num * 2);
console.log("Mapped Numbers (each element multiplied by 2):", mappedNumbers); // Outputs: [2, 4, 6, 8, 10]

// joining an array
let joinedNumbers = numbers.join(", ");
console.log("Joined Numbers:", joinedNumbers); // Outputs: "1, 2, 3, 4, 5"

// concatenating arrays
let moreNumbers = [6, 7, 8, 9];
let concatenatedArray = numbers.concat(moreNumbers);
console.log("Concatenated Array:", concatenatedArray); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8]

//flat array
let nestedArray = [1, [2, 3], [4]];
let flatArray = nestedArray.flat(2);
console.log("Flat Array:", flatArray); // Outputs: [1, 2, 3, 4]

// slicing an array
let slicedArray = numbers.slice(1, 3);
console.log("Sliced Array:", slicedArray); // Outputs: [2, 3]

// splicing an array
let splicedArray = numbers.splice(1, 2, 10, 20);
console.log("Spliced Array:", numbers); // Outputs: [0, 10, 20]