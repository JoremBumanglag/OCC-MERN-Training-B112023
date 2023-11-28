// let varOne = 1;
// console.log(varOne);

// varOne = 2;
// console.log(varOne);

// const my_name = 'Jorem';
// console.log(my_name);

// //String
// const string_dataType = 'I am a String';
// console.log(string_dataType);

// //Integer
// const int_dataType = 2;
// console.log(int_dataType)

// //Float
// const float_dataType = 2.212;
// console.log(float_dataType)

// //Boolean Value
// const truthy = true;
// const falsy = false;

// //Undefined
// let variable;
// console.log(variable);

// //Null
// const nothing = null;
// console.log(null);

// //Array
// const fruits = ["apple", "orange", "starapple"];
// console.log(fruits);
// console.log(fruits[2]);

// //Arithmetic Operators
// const numOne = 5;
// const numTwo = 6;

// let result = numOne + numTwo;

// console.log(numOne + numTwo);
// console.log(numOne - numTwo);
// console.log(numOne * numTwo);
// console.log(numOne / numTwo);
// console.log(numOne % numTwo);

// //Comparison Operator
// const numOne = 5;
// const numTwo = 6;
// const numThree = "5";

// console.log(numOne == numThree); 
// console.log(numOne === numThree); 
// console.log(numOne != numThree);
// console.log(numOne !== numThree);
// console.log(numOne > numTwo);
// console.log(numOne < numTwo);
// console.log(numOne >= numTwo);
// console.log(numOne <= numTwo);

// //Logical Operator
// let sunny = true;
// let warm = false;

// console.log(sunny && warm);
// console.log(sunny || warm);
// console.log(!warm);

// //Assignment Operators:
// let num = 5;
// console.log(num);

// num += 1;
// console.log(num);

// num -= 2;
// console.log(num);

// num *= 2;
// console.log(num);

// num /= 2;
// console.log(num);

// //If statement
// let temperature = 25;

// if (temperature > 20) {
//     console.log("It's a warm day!");
// }

// //else statement
// temperature = 10;

// if (temperature > 20) {
//     console.log("It's a warm day!");
// } else {
//     console.log("It's a cold day!");
// }


// //else if statement
// temperature = 20;

// if (temperature > 20) {
//     console.log("It's a warm day!");
// } else if (temperature < 20) {
//     console.log("It's a cold day!");
// } else if (temperature == 20) {
//     console.log("It's a fine day!")
// }


// //switch statement

// let age = 18;

// switch (true) {

//     case age <= 20 && age >= 10:
//         console.log("Adolescent");
//     break;
//     case age > 30 && age < 20:
//         console.log("Young Adult");
//     break;
//     default: 
//         console.log("Old");
// }

//While Loop

let count = 0;

while (count < 3) {
    console.log("This is loop iteration #" + count);
    count++;
}

//do while 

let num = 5;

do {
    console.log("This will run atleast once");
    num--;
} while (num > 0);

//for loop

for (let i=0; i < 3; i++) {
    console.log("This is statement " + (i+1));
}
