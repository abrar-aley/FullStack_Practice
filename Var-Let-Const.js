// Refactored Code

// Using const for a value that doesn’t change
const x = 10; 
console.log(x);

// Using let for variables that can change but are not redeclared
let a = 20;
console.log(a);

if (true) {
    let z = 30; // Block-scoped variable
    console.log(z);
}

let b = 40; // Variable that can be reassigned
b = 50;
console.log(b);

// Constant value that should not change
const PI = 3.14159; 
console.log(PI);
