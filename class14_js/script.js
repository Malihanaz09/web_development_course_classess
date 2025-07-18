// get attribute
const heading = document.getElementById("heading");
let attribute = heading.getAttribute("id"); // returns "heading"
console.log(attribute); // Output: heading

// set attribute
heading.setAttribute("id", "newHeading");
attribute = heading.getAttribute("id"); // returns "new-heading"
console.log(attribute); // Output: new-heading

// classList
const button = document.querySelector("#btn");
// add class
button.classList.add("btn2");


// event listener
button.addEventListener("click", function() {
    alert("Button was clicked!");
});

// double click event
button.addEventListener("dblclick", function() {
    console.log("Button was double clicked!");
});

// mouseover event
button.addEventListener("mouseover", function() {
    console.log("Mouse is over the button!");
});

// mouseout event
button.addEventListener("mouseout", function() {
    console.log("Mouse is out of the button!");
});

// keydown event
document.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
});

// form submission
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById("name").value;
    console.log("Form submitted with name:", name);
});

// change event on input
const input = document.getElementById("name");
input.addEventListener("change", function() {
    console.log("Input changed to:", input.value);
});

//load event
window.addEventListener("load", function() {
    console.log("Page is fully loaded!");
});

button.onclick = ()=> {
    console.log("Button was clicked by event!");
}

// get h1
let h1 = document.querySelector("h1");
console.log(h1.innerHTML);

// set innerText of h1
h1.innerText = "Welcome to Class 14!";