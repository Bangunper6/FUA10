let fruits = ["Apple", "Banana", "Cherry"]
console.log("Fruits: ", fruits);

console.log("First Fruit: ", fruits[0]);
console.log("Second Fruit: ", fruits[1]);
console.log("Third Fruit: ", fruits[2]);

console.log("Lenght of Fruits: ", fruits.length);

// Adding element inside of the Array
// .push(element) - add an element at the end of the array
fruits.push("Mango");
console.log("Fruits:", fruits);

// .slice() - access a portion of our array
// 1st Argument: Starting Index
// 2nd Argument: Element that we don't want to include.
let sliced_fruits = fruits.slice(1, 3)
console.log("Sliced Fruits:", sliced_fruits);

// .splice() method - add or delete an element at a specified index.
// 1st Argument: starting index
// 2nd Argument: delete count
// 3rd Argument: Element/s that you want to add
fruits.splice(1, 0, "Dewberry", "Avocado");
console.log("Fruits:", fruits);

// .pop() - Delete an element at the end of the array
fruits.pop();
console.log("Fruits:", fruits);

// .splice() method - add or "delete" an element at a specified index.
fruits.splice(1, 2)
console.log("Fruits:", fruits);

// Searching Elements
// .includes()
console.log("Is Banana inside of Fruits Array?", fruits.includes("Banana"));

// .indexOf()
console.log("Index of Banana:", fruits.indexOf('Banana'));

// .forEach()
fruits.forEach(function (fruit){
    console.log("Fruit:", fruit)
});