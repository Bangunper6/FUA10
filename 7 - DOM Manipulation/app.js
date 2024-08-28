// Accessing element using ID
let elementWithID = document.getElementById("first-div");
console.log(elementWithID);
// Change the text content
elementWithID.textContent = "Div 10";

// Accessing element using Class name
let elementWithClass = document.getElementsByClassName("sample-div");
console.log(elementWithClass); // Returns HTML collection(1 or more element)
elementWithClass[1].textContent = "Div 2"

// Accessing element using tagname
let listItems = document.getElementsByTagName("li");
// cHanging the style of element using DOM
listItems[0].style.color = "Crimson";

// Accessing element using Query Selector
let orderedListItem = document.querySelector(".ordered-list");
console.log(orderedListItem) // Return only first element
orderedListItem.style.backgroundColor = "Green";

// Accessing element using Query Selector All
// Can select ID, class or Tag
let orderedListItems = document.querySelectorAll("#first-div");
console.log(orderedListItems);

// Updating Element Attributes
let dayNightIcon = document.getElementById("day-night-icon");
dayNightIcon.setAttribute(
    "src",
    "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// Appending new Element
let parentElement = document.getElementById("parent-element");
let createdElement = document.createElement("div");
createdElement.textContent = "Bapak Element";
parentElement.prepend(createdElement); // tambah di awal 
// parentElement.appendChild(createdELement);  tambah di akhir

// Removing Element
let elementRemoved = document.getElementById("element-to-be-removed");
elementRemoved.remove();

let darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
    let pageContainer = document.getElementById("page-container");
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";
    let pageModeText = document.getElementById("page-mode-text");
    pageModeText.textContent = "Dark mode";
});

let lightModeBtn = document.getElementById("light-mode-btn");
lightModeBtn.addEventListener("click", lightModeOn);
function lightModeOn() {
    let pageContainer = document.getElementById("page-container");
    pageContainer.style.backgroundColor = "white";
    pageContainer.style.color = "black";
    let pageModeText = document.getElementById("page-mode-text");
    pageModeText.textContent = "Light Mode";
}
