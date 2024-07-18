// Activity 1 - Function Declaration

// Task 1 
// let isEvenOrOdd = 
function evenOrOdd(num) {
    if (num % 2 == 0) {
        return "Num is even"
    } else {
        return "Num is odd"
    }
}
console.log(evenOrOdd(10));

// Task 2

function square(num) {
    return num * num;
}
let ans = square(5)
console.log(ans);

// Activity 2 - Function Declaration
// Task 3
let result = function maxNumber(num1, num2) {
    return Math.max(num1, num2)
}
console.log(result(10, 20));

// Task 4
let res = function concatString() {
    let str1 = 'Hi There, '
    let str2 = 'How are you?'
    return str1.concat(str2)
}
console.log(res());

// Activity 3 - Arrow Functions 
// Task 5
let sum = (num1, num2) => {
    return num1 + num2
}
console.log(sum(10, 20));

// Task 6
let ch = () => {
    let str = "Hello World"
    if (str.charAt(3) == 'l') {
        return true
    }
    return false
    // return str.charAt(ch)
}
console.log(ch()); //return true

// Activity 4 - Function Parameters and default values

//  Task 7
function defaultParam(n1, n2 = 10) {
    return n1 * n2
}
console.log(defaultParam(60));

// Task 8 
let greetMsg = function greeting(name, age) {
    return `Hi ${name}, I Hope you are doing well. Now you are ${age} what did you think about your future??`
}

console.log(greetMsg("Ram", 23));

// Activity 5 - Higher Order Functions 
// Task 9

function higherorderFunction(cb, num) {
    for (let i = 0; i < num; i++) {
        cb(i)
    }
}
higherorderFunction((i) => {
    console.log("function called by ", i, "no. of times")
}, 5)

// Task 10 

function hof(cb1, cb2, value) {
    return cb2(cb1(value))
}

// callbacks 1, 
function cb1(x) {
    return x + 1
}

// callback2
function cb2(x) {
    return x ** 2
}

console.log(hof(cb1, cb2, 5))






