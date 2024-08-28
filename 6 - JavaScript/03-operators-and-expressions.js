// Operators and Expressions
// 1. Arithmetic Operators
let num1 = 10;
let num2 = 5;
console.log("Addition (+):", num1 + num2);
// SHIFT + ALT + DOWN ARROW untuk copy
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Devision (/):", num1 / num2);
console.log("Exponent (**):", num1 ** num2);
console.log("Remainder (%):", num1 % 6);

// Order of Operations
// PEMDAS / BODMAS
let answer = 3 + 4 * (5 - 2) ** 2 / 2;
console.log("Answer:", answer);

// 2. String Concatenation or Expression
let greeting = "Hello";
let name = "John";
console.log(greeting,name);

// 3. Comparison Operators
console.log("Equal to (==):" , num1 == num2);
console.log("Equal to (==):", num1 == "10");
console.log("Not Equal to (!=):", num1 != num2);
console.log("Not Equal to (!=):", num1 != "10");
console.log("Strict Equal to (==):", num1 === num2);
console.log("Strict Equal to (==):", num1 === "10");
console.log("Strict Not Equal to (!==):", num1 !== num2);
console.log("Strict Not Equal to (!==):", num1 !== "10");

console.log("Greater Than (>):", 5 > 3);
console.log("Less Than (<):", 5 < 3);
console.log("Greater Than or Equal to (>=):", 5 >= 3);
console.log("Greater Than or Equal to (>=):", 5 >= 5);
console.log("Less Than or Equal to (<=):", 5 <= 3);
console.log("Less Than or Equal to (<=):", 3 <= 5);
console.log("Less Than or Equal to (<=):", 5 <= 5);

// 4. Logical Operators
// && - AND
// || - OR
// ! - NOT
let sunny = true;
let warm = true;

// AND: true if all of the conditions is met, otherwise false
console.log("Is it sunny AND warm?", sunny && warm);

// OR: true if atleast one of your condition is met, otherwise, false
console.log("Is it sunny OR warm?", sunny || warm);

// NOT: Invert the value of a boolean
console.log("NOT:", !sunny)

// 5. Assignment Expression
// Single Equal sign (=) store a data to a varibale.
let num3 = 10;
let num4 = 5;

// Addition Assignment (+=)
// num3 = num3 + num4
num3 += num4
console.log("This is the new value of num3:", num3)
// Computation : 10 + 5= 15

// Subtraction Assignment (-=)
num3 -= num4
console.log("This is the new value of num3:", num3)
// Computation: 15 - 5 = 10

// Multiplication Assignment (*=)
num3 *= num4
console.log("This is the new value of num3:", num3)
// Computation: 10 * 5 = 50

// Division Assignment (/=)
num3 /= num4
console.log("This is the new value of num3:", num3)
// Computation: 50 / 5 = 10