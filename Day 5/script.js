// ============ //
// this Keyword //
// ============ //
// "THis" keyword refers to an object that is execuring the current piece of code

// const student = {
//     name : 'Sakib',
//     age : 17,
//     eng : 47,
//     math : 87,
//     getAvg () {
//         console.log(this);
//         let avg = (this.eng + this.math) / 2;
//         console.log(`${this.name} got avg marks : ${avg}`);
//     }
// }
// console.log(student.getAvg());

// function  getAvg () {
//     console.log(this);
// }

// getAvg();



// ============= //
// try and catch //
// ============= //
// The try student allows to define a block of code to be tested for error while it is being executed.

// The catch statment allow you to definr a block of code to be executed if an error ocurs in the try block.

// console.log('Hello');
// console.log('Hello');
// try {
//     console.log('Try');
//     console.log(a);
//     console.log('after value');
// } catch (error) {
//     console.log("a is not defined");
//     console.log(error);
// }
// console.log('Hello2');
// console.log('Hello2');




// ===============//
// Arrow function //
// ===============//

// const sum = (a,b) =>{
//     console.log(a+b);
// }

// console.log(sum(21,21));


// Implicit return
// const mul = (a,b) => (
//     a * b
// );
// console.log(mul(12,2));


// ==============//
//  Set timeout  //
// ==============//
// setTimeout(function , timeout);

// console.log("Hii there");

// setTimeout(() => {
//     console.log("ApnaCollege");
// }, 1000);

// console.log('Welcome to, ');



// ==============//
//  Set interval //
// ==============//
// setInterval(function , timeout)

// setInterval(() => {
//     console.log('Apna College');
// }, 1000);


// let id = setInterval(() => {
//     console.log('Apna College');
// }, 1000);
// console.log(id);
// clearInterval(id);

// let id2 = setInterval(() => {
//     console.log('Apna College');
// }, 1000);
// console.log(id2);





// ========================= //
//  this with arrow function //
// ========================= //


// const student = { // global scope
//     name: 'Sakib',
//     age: 17,
//     prop: this, // global scope
//     getName: function () {
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this); // prante scope -> global scope
//         return this.age;
//     }, 
//     getInfo1: function () {
//         setTimeout(() => {
//             console.log(this); // student
//         }, 2000)
//     },
//     getInfo2: function () {
//         setTimeout(function () {
//             console.log(this) // window
//         }, 4000);
//     }
// }
// console.log(student.getName());
// console.log(student.getMarks());

// console.log(student.getInfo1());
// console.log(student.getInfo2());

// let a = 4; // global scope


// Practice Question
// write an arrow function that return the square of a number 'n'

// const sqr = n => n * n;
// console.log(sqr(2));

// write a function that print "Hello world" 5  time at interval of 2s each. 


// let printing = setInterval(() => {
//     console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//     clearInterval(printing)
// }, 10000);





// ============ //
// Practice Set //
// ============ //
// write an arrow function named arrayAverage that accepts an array of number and return the average of those numbers.


// const arrayAverage = () => {
//     let arr = [23, 34, 55];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     let avg = sum / arr.length;
//     console.log(avg);
// }
// arrayAverage();


// write an arrow function named isEven() that takes a single number as argument and return if it is even or not

// const isEven = (n) => {
//     return n % 2 == 0 ? "Even" : 'Odd'
// }
// let n = 23;
// console.log(isEven(n));


// What is the output od this code
// const object = {
//     massage : 'Hllo World',
//     longMassage () {
//         console.log(this.massage);
//     }
// }

// setTimeout(object.longMassage(), 1000);



// What is the output of the following code
// let length = 4;
// function callBack() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method(callBack) {
//         callBack();
//     }
// }

// object.method(callBack);
