//step 1
let students = ["student1","student2", "student3"];

students[0] = {
    name: "Jorem Bumanglag",
    age: 23,
    grade: 12
};

students[1] = {
    name: "Juan Dela Cruz",
    age: 18,
    grade: 10
};

students[2] = {
    name: "Robert Samson",
    age: 17,
    grade: 11
};

//step 2
console.log(students[1].name);

//step 3
students.push("student4");

students[3] = {
    name: "Anna Frozen",
    age: 16,
    grade: 9
}

//step 4
for(let i = 0; i<students.length; i++){
    console.log("Name: "+students[i].name+" Grade: "+students[i].grade);
}

//step 5
let book = {
    title: "Harry Potter",
    author: "J.K Rowling",
    year: 1991
};

//step 6
console.log(`Title: ${book.title}`);

//step 7
book.year = 1998;

//step 8
const getSummary = () => {
    let summary = `Title: ${book.title}, Author: ${book.author} and Year: ${book.year}`;
    return summary;
}

//step 9
console.log(getSummary());

//step 10
let library = [];
library.push(book);

//step11
console.log(library);

//step 12
let car = {
    brand: "Kia",
    model: "Sorento",
    year: 2022,
    startEngine(){
        console.log(`The car ${this.brand} and ${this.model} engine is starting`);
    }
};

//step 13
console.log(`Model: ${car.model}`);

//step 14
car.year = 2023;

//step 16
car.startEngine();

//step 17
let garage = [];
garage.push(car);

//step 18
console.log(garage);

//step 19
let person = {
    name: "Jorem Bumanglag",
    age: 23,
    city: "Santa Rosa"
}

//step 20
console.log(person.age);