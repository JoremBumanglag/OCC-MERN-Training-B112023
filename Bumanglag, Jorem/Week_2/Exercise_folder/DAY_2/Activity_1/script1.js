//step 1
let greet = function (){
    console.log("Hello");
};

//step 2
greet();

//step 3
let add = function(a, b){
    return a + b;
}

//step 4
let sum = add(5,6);

//step 5
console.log(sum);

//step 6
let multiply = (a,b) => {
    return a * b;
}

//step 7
let product = multiply(5,6);

//step 8
console.log(product);

//step 9
let isEven = (a) => {
    if(a % 2 == 0){
        return true;
    }else{
        return false;
    }
}

//step 10
let even = isEven(6);

//step 11
console.log(even);
