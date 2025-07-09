// Operators in JavaScript
let a = 10;
let b = 20; 
let c = 3;

// Arithmetic Operators
console.log("Addition:", a + b); // Addition
console.log("Subtraction:", a - b); // Subtraction
console.log("Multiplication:", a * b); // Multiplication
console.log("Division:", a / b); // Division
console.log("Modulus:", a % b); // Modulus
console.log("Exponentiation:", a ** c); // Exponentiation (a raised to the power of 2)
console.log("Increment:", ++a); // Increment
console.log("Decrement:", --b); // Decrement

//comparison Operators
console.log("Equal:", a == b); // Equal
console.log("Not Equal:", a != b); // Not Equal
console.log("Strict Equal:", a === b); // Strict Equal
console.log("Strict Not Equal:", a !== b); // Strict Not Equal
console.log("b is Greater Than a:", b > a); // Greater Than
console.log("a Less Than b:", a < b); // Less Than
console.log("b Greater Than or Equal to a:", b >= a); // Greater Than or Equal To
console.log("a Less Than or Equal to b:", a <= b); // Less Than or Equal To

//logical operator
let x = 5;
let y = 10;
console.log(x && y);
console.log(x || y);

//ternary operator
let age = prompt("age:"); 
console.log(age > 18 ? "adult" : "not adult")

// Conditional Statement if/else
let gender = "male";
if ( gender == "male"){
    console.log ("male")
}else if ( gender == "female"){
    console.log("female")
}else{
    console.log("condition are not true")
}


// function
function add(){
    console.log( 2 + 9);
}
add();
