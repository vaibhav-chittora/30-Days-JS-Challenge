//Task 1 - variable declaration using var and let;

var number = 5;
console.log(number);
console.log("**************");

let str = "howdy";
console.log(str);
console.log("**************");

// Task 2 - variable declaration using const
const boolValue = true;
console.log(boolValue);
console.log("**************");

console.log("Logging Different Data-Types ");
console.log("**************");

// Task 3 - Data Types

const num = 10;
const str1 = "Hello World";
const bool = false;
const obj = {
    name: "Vaibhav",
    age: 24,
    address: "Rajasthan"
};
const arr = [1, 2, 3, 4, 5];

console.log(num, "Type is:", typeof num);
console.log("**************");
console.log(str1, "Type is:", typeof str1);
console.log("**************");
console.log(bool, "Type is:", typeof bool);
console.log("**************");
console.log(obj, "Type is:", typeof obj);
console.log("**************");
console.log(arr, "Type is:", typeof arr);

// task 4 - Reassigning Variables
let var1 = 3;
console.log(var1);

var1 = 5;
console.log(var1);

// task 5 - Const ;
const val = "Vaibhav"
console.log(val);

// val = 45;
// console.log(val); //it will give error that you are assignning to a const variable., which is not possible.



// Feature Request

console.log("*****");
const Num = 25;
const strr = "golu"
const bool1 = false;
const obj1 = {
    name: "Vaibhav",
    age: 24,
    address: "Rajasthan"
}
const arr1 = [5, 4, 3, 2, 1];

console.log("Value is :", Num, "And Data Type is : ", typeof Num);
console.log("Value is :", strr, "And Data Type is : ", typeof strr);
console.log("Value is :", bool1, " And Data Type is : ", typeof bool1);
console.log("Value is :", obj1, "And Data Type is : ", typeof obj1);
console.log("Value is :", arr1, "And Data Type is : ", typeof arr1);




// Re-assignment demo Using let for variable declaration


let numLet = 10;
console.log("Initial value with let:", numLet);

// Reassigning value with let
numLet = 20;
console.log("After reassignment with let:", numLet);

// Using const for variable declaration
const numConst = 30;
console.log("Initial value with const:", numConst);

// Attempting to reassign const (will throw an error)
// numConst = 40; // Uncommenting this line will cause an error

// Outputting the final value of const to show it remains unchanged
console.log("Value of const after attempt to reassign:", numConst);
