// for loop to iterate through numbers 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log("2 x " + i + " = " + 2*i);
}

// while loop 
console.log("Multiplication table of 3:");
let j = 1;
while (j <= 10) {
    console.log("3 x " + j + " = " + 3*j);
    j++;
}

// do-while loop
console.log("Multiplication table of 4:");
let k = 1;
do {
    console.log("4 x " + k + " = " + 4*k);
    k++;
}while (k <= 10);

// DOM manipulation example
// get the element with id
let heading = document.getElementById("heading");
console.log(heading);

// get the elements with class name
let items = document.getElementsByClassName("class-heading")
console.log(items);

// get the elements with tag name
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// querySelector example
let firstParagraph = document.querySelector("p");
console.log(firstParagraph);

// querySelectorAll example
let allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

let h1 = document.querySelector("#heading");
console.log(h1);

//get innerText of an element
console.log(h1.innerText);

// set innerText of an element
h1.innerText = "Hello EveryOne!";

// innerHTML example
let content = document.querySelector(".class-heading");
content.innerHTML = "<i>Welcome to the JavaScript Class!</i>";

// changing styles using JavaScript
h1.style.color = "blue";
h1.style.backgroundColor = "yellow";

// adding a new element to the DOM
let newParagraph = document.createElement("p");
newParagraph.innerText = "This is a new paragraph added to the DOM.";
document.body.appendChild(newParagraph);

// add button 
let button = document.createElement("button");
button.innerText = "Click Me!";
document.body.appendChild(button);
button.style.backgroundColor = "blue";
button.style.color = "white";

// remove an element from the DOM
// button.remove();

// add event listener to the button
button.addEventListener("click", function() {
    alert("Button was clicked!");
});
// add event listener to the heading

function guessGame() {
  let secretNumber = Math.floor(Math.random() * 10) ;
  let userGuess = prompt("Guess a number between 1 and 10:");

  if (userGuess == secretNumber) {
    alert("🎉 Correct!");
  } else {
    alert("❌ Wrong! The number was " + secretNumber);
  }
}
guessGame();