// Activity 1 - If-else Statements

// Task 1
let num = -5;
if (num > 0) {
    console.log("positive number");
} else if (num === 0) {
    console.log("Number is equal to 0");
} else {
    console.log("negative number");
}

// Task 2 
let age = 13;
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// Activity 2 - Nested If-else

// Task 3

let num1 = 18;
let num2 = 25;
let num3 = 50;

if (num1 > num2) {
    if (num1 > num3) {
        console.log("num1 is greater than num2 and num3");
    } else {
        console.log("num3 is greater than num1 and num2");
    }

} else {
    if (num2 > num3) {
        console.log("num2 is greater than num1 and num3");
    } else {
        console.log("num3 is greater than num1 and num2");
    }


}

// Activity 3 - Switch Case

// Task 4 -

let day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Sunday");

}

// Task 5 -

let score = 90;
switch (score) {
    case 90:
        console.log("A");
        break;
    case 80:
        console.log("B");
        break;
    case 70:
        console.log("C");
        break;
    case 60:
        console.log("D");
        break;
    case 65:
        console.log("E");
        break;
    default:
        console.log("F");

}


// Activity 4 - Ternary Operator

// Task 6
let Number = 5;
Number % 2 === 0 ? console.log("Number is Even") : console.log("Number is Odd");;

// Activity 5;

// Task 7

let year = 2012;

if (year % 4 === 0) {
    if (year % 100 === 0) {

        if (year % 400 === 0) {
            console.log("Leap Year");
        } else {
            console.log("Not a Leap Year");
        }
    }else{
        console.log("Leap Year");
    }
} else {
    console.log("Not a Leap Year");
}
