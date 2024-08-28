// Functions
// Reusable block of code that we can execute whenever needed.

// 1. Function Declaration
function greet(){
    console.log("Hello, welcome to the world of function");
    console.log("Let's gooo!!!");
}

// Calling a function.
greet();
greet();
greet();
greet();
greet();

// 2. Function with parameters.
// Parameter - placeholder.
function sum(num1, num2){
    console.log("Calculating the value...");
    return num1 + num2;
}
console.log("Answer: " , sum(4, 5)); 
console.log("Answer: " , sum(10, 3)); 
console.log("Answer: " , sum(100,43)); 