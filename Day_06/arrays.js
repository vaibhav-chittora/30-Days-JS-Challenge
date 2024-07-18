// Acivity 1 - Array Creation and access

// Task 1 - 
let numArray = [1, 2, 3, 4, 5]
console.log(numArray);

// Task 2 -
console.log(numArray[0]); //1st element
console.log(numArray[numArray.length - 1]); //last element

// Activity 2 - Array methods(Basic)

// Task 3 -
numArray.push(6)
console.log(numArray);
// Task 4 -
numArray.pop()
console.log(numArray);
// Task 5 -
numArray.unshift(0)
console.log(numArray);
// Task 6 -
numArray.shift()
console.log(numArray);

// Activity 3 -  Array methods (intermediate)

// Task 7 - map() method
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr = arr.map((i) => {
    return arr[i] * 2
})
console.log(newArr);

//Task 8 - Filter methods
let evenArray = arr.filter((i) => {
    return arr[i] % 2 == 0
})
console.log(evenArray);

// Task 9 -
let reduceArrValue = arr.reduce((ac, curr) => {
    return ac + curr
}, 0)
console.log(reduceArrValue);

// Activity 4 -

// Task 10 -

let arr1 = [2, "Vaibhav", true, 4.66, 45, 100]
for (let i = 0; i < arr1.length; i++) {
    console.log(`element at index ${i} is ${arr1[i]}`);
}

// Task 11 - same as task 10 but with forEach()
let resultArray = [1, 3, 45, 23, 61, 0]
resultArray.forEach((ele, idx) => { //forEach takes 2 param - index,element
    console.log(`element at index ${idx} is ${ele}`);
})

// Activity 5 - Multi Dimensional Arrays 

//Task 12 - 
let rows = 4
let cols = 3
let matrix = []
// let matrix = new Array(rows).fill(1)
for (let i = 0; i <= rows; i++) {
    matrix[i] = []
    for (let j = 0; j <= cols; j++) {
        matrix[i][j] = j
    }
}
console.log(matrix)

// Task 13 - 
console.log(matrix[3][1]);