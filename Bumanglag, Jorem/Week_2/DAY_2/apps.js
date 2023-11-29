// function namedFunction() {
//     console.log("Hello! I am a named function");
// }

// namedFunction();

// let anonymousFunction = function() {
//     console.log("Hello! I am an anonymous function");
// };

// anonymousFunction();

// const getRandomNumber = () => Math.random();
// console.log(getRandomNumber());

// function addNumbers(a, b) {
//     return a + b;
// }
// console.log(addNumbers(5, 10));                
// const square = x => x * x;

// const multiply = (a, b) => {
//     let result = a * b;
//     console.log("The result is:" + result);
// };

// multiply(5,2);

// const global = "I am a global variable."

// function functionOne() {

//     console.log(global);

// }

// functionOne();


// const functionTwo = () => {

//     let local = "I am a local variable"
//     console.log(local);

// }

// functionTwo();

// const square = (num, callback) => {
//     const result = num * num;
//     callback(result);
//   };

//   const logResult = result => {
//     console.log('The result is:', result);
//   };

//   square(5, logResult);

// const person = {
//     name: "Garfield",
//     age: 25,
//     greet: function() {
//         console.log(`Hello. My name is ${this.name}, I am ${this.age} years old`)
//     }
// };

// console.log(person.name);
// person.greet();

let myNum = parseInt(document.getElementsByClassName("students")[0].innerHTML);

myNum += 2;

document.getElementsByClassName("students")[1].innerHTML = myNum;
console.log(typeof myNum);

let inputName = document.forms["myForm"]["myName"].value;

function checkForm(){
    if(inputName == "")
    {
        alert("Name cannot bet empty")
        return false;
    }
}

//adding numbers
let display = parseInt(document.getElementsByTagName("h1")[0].innerHTML);

let add = () => {
    display = display + 1;
    return (document.getElementsByTagName("h1")[0].innerHTML = display);
}

let minus = () => {
    display--;
    return (document.getElementsByTagName("h1")[0].innerHTML = display);
}

const li = document.createElement("li");
const node = document.createTextNode("This is a list item");
li.appendChild(node)

const parent = document.getElementsByTagName("ul")[0];

parent.appendChild(li);

console.log(li);
console.log(typeof li);

