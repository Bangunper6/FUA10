// Control Flow Structures

// 1. Conditional Statements
// Allow us to execute different blocks of code based on a condition.

// if, else if, else statements
// Condition Block - ()
// Code Block - {}
let temperature = 15;

if (temperature < 0) {
    console.log("Its Freezing. ");
} else if (temperature >= 0 && temperature < 20){
    console.log(" It's cool outside. ")
} else if (temperature >= 20 && temperature < 30){
    console.log("It's warm Outsite. ")
} else {
    console.log("It's hot outside.")
}

// switch-case statements
let day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's the end of the week days.");
        break;
    default:
        console.log("It's just a normal day.");
}

// 2. Looping Statements
// Repeatedly execute a block of code until a condition is not met.

// For Loop
/*
    1st: Variable Initialization
    2nd: Condition Expression
    3rd: Increment/Decrement
*/ 
for (let i = 1; i <= 3; i++){
    console.log("For Loop Count:", i);
}

// While Loop
let count = 1;
while (count <= 3){
    console.log("While Loop Count:", count);
    count++;
}

// Do-While Loop
let counter = 1;
do {
    console.log("Do-While Loop Count:", counter);
    counter++;
} while (counter <= 3);

// Do-While Loop
let counters = 4;
do {
    console.log("Do-While Loop Count:", counters);
    counter++;
} while (counters <= 3);
