// Activity 1 - Arithmetic Operators

const num1 = 2;
const num2 = 4;

console.log(num1 + num2);

console.log(num1 - num2);

console.log(num1 * num2);

console.log(num1 / num2);

console.log(num1 % num2);


// Activity 2 - Assignment Operators

let result = 0
result += num1
console.log(result); //output :2

result -= num1
console.log(result); //output :0

// Activity 3 - Comparison Operators

console.log(`Is Num1 greater than Num2 :`, num1 > num2);
console.log(`Is Num1 less than Num2 :`, num1 < num2);
console.log(`Is Num1 greater than qual to Num2 :`, num1 >= num2);
console.log(`Is Num1 less than quual to Num2 :`, num1 <= num2);
console.log(`Is Num1 qual to Num2 :`, num1 == num2);
console.log(`Is Num1 qual to Num2 :`, num1 === num2);

// Activity 4 - Logical Operators;

let num3 = 10;
let num4 = 20;
console.log(num3 > num4 && num3 < num4); //output :false

console.log(num3 > num4 || num3 < num4); //output :true

console.log(num3 !== num4); //output:true

// Activity 5 - Ternary Operator

num3 > 0 ? console.log("Number is Positive") : console.log("Number is Negative")  //output :Number is Positive

