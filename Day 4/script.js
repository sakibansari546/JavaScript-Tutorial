// =============== //
// Functions In JS //
// =============== //

//  Syntax  ----------//
// function funName ( ){
//     // DO somethings
// }
// CALLING THE FUNCTION
// funName();

// function hello () {
//     console.log('Hello');
// }
// hello();

// function printName () {
//     console.log('Apna College');
// }
// printName();
// function print1to5 (){
//     for(let i = 1; i <= 5; i++){
//         console.log(i);
//     }
// }
// print1to5();
// function isAdult () {
//     let age = 18;
//     if(age >= 18){
//         console.log('Adult');
//     } else{
//         console.log('Not Adult');
//     }
// }
// isAdult();



// function printPoem() {
//     console.log('Twinkle Twinkle, little star');
//     console.log('how I wonder what you are');
// }

// printPoem();


// function rollDice () {
//     let dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
// }
// rollDice();


// ======================= //
// Functions with argument //
// ======================= //

// function printInfo(name,age){
//     console.log('Name' , name);
//     console.log('Age' , age);
// }

// printInfo('Sakib',17);



// Practice Question
// Create a function that give us the average of 3 numbers
// function average(a,b,c) {
//     let avg = (a+b+c) / 3;
//     console.log(avg);
// }
// average(3,3,3);



// Create a function that print a multiplication table of number.

// function printTable (n){
//     for (let i = 1; i <= 10; i++) {
//         let table = i * n;
//         console.log(i, "X", n, "=", table);
//     }
// }
// printTable(7);





// ============== //
// Return Keyword //
// ============== //

// function sum(a, b) {
//     return a + b;
// }

// let s = sum(6, 4);
// console.log(s);

// let sm = sum(sum(2, 2), 4);
// console.log(sm);

// function isAdult(age){
//     if(age >= 18){
//         return 'Adult';
//     }else{
//         return 'Not Adult'
//     }
// }

// isAdult(18);
// console.log(isAdult(18));



// Practice Question
// Create a function to calculate the sum of number 1 to n

// function sumOf1toN(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// sumOf1toN(5);
// console.log(sumOf1toN(6));



// Create a function taht return the concatenation of all strings in an arry

// function concatArray(arr){
//     let result = '';
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     return result;
// }
// let arr = ['Hello', 'Hey', "How", 'Are','You'];
// console.log(concatArray(arr));





// =================== //
// Scope in JavaScript //
// =================== //
// Function Sccope

// let sum = 50;
// function calSum(a, b) {
//     let sum = a + b;
//     console.log(sum);
// }
// calSum(2,2);
// console.log(sum);


// Block Scope
// variable declared inside a {} block be adccesses from outside the block

// {
//     let a = 23;
// }
// console.log(a);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);



// Lexical Scope
// function outerFunc () {
//     let c = 24;
//     let x =32;
//     function insideFunc(){ // Function Scope
//         console.log(c);
//         console.log(x);
//     }
//     insideFunc();
// }

// outerFunc();



// Practice Question
// What will be the output

// let greet = 'Hello';  // Global Scope
// function changeGreet( ){
//     let greet = 'namaste' // Function Scope
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet); // Lectical Scope
//     }
//     innerGreet();
// }
// console.log(greet);
// changeGreet();






// =================== //
// Function Expression //
// =================== //
// const sum = function (a,b){
//     return a + b;
// }

// sum(12,3);

// let hello = function (){
//     console.log('hello');
// }
// hello();

// hello = function () {
//     console.log("Hey");
// }
// hello();




// ====================== //
// Higher oreder function //
// ====================== //
// Take One or multiple function as argument

// function multipleGreet(func, n) {
//     for (let i = 1; i <= n; i++) {
//         func();
//     }
// }
// let greet = function () {
//     console.log('Hello');
// }

// multipleGreet(greet, 4);




// let odd  = function (n) {
//     console.log(!(n %2 == 0));
// }

// let even = function (n){
//     console.log((n %2 == 0));
// }

// odd(1);
// even(2);

// function oddEvenFactory (request){
//     if(request == 'odd'){
//         let odd  = function (n) {
//             console.log(!(n %2 == 0));
//         }
//         return odd;
//     } else if(request == 'even'){
//         let even = function (n){
//             console.log((n %2 == 0));
//         }
//         return even;
//     } else{
//         console.log('Wrong Requestt');
//     }
// }

// oddEvenFactory('odd');
// let request= 'odd';
// request = 'even'
// let func = oddEvenFactory(request);
// func();





// ================= //
// PRactice Question //
// ================= //
// Qs1. Write a JavaScript function that returns array elements larger than a number

// function largeElm (n){
//     let arr = [12,43,54,6,7,78,3];
//     for(let i = 0; i< arr.length; i++){
//         if (n < arr[i]) {
//             console.log(arr[i]);
//         }
//     }
// }

// largeElm(45);


// Qs2. Write a JavaScript function to extract unique characters from a string.Example: str = “abcdabcdefgggh” ans = “abcdefgh”





// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.Example : country = ["Australia", "Germany", "United States of America"] output : "United States of America"


// let country = ["Australia", "Germany", "United States of America"];

// function longCountryName(country) {
//     let countryLength = 0;
//     let longCountry = ''
//     for (let i = 0; i <= country.length; i++) {
//         if (country[i] != undefined) {
//             let length = country[i].length;
//             if (countryLength < length) {
//                 countryLength = length;
//                 longCountry = country[i];
//             }
//         }
//     }
//     console.log(longCountry);
// }

// longCountryName(country);




// Qs4. Write a JavaScript function to count the number of vowels in a String argument

let str = "oaasdaijiiiiuwfdcd";
function countVowels (str){
    let vowelsLenght = 0;

    for (let i = 0; i < str.length; i++) {
        if(
            str[i] == 'a' ||
            str[i] == 'e' ||
            str[i] == 'e' ||
            str[i] == 'o' ||
            str[i] == 'u' 
        ){
            vowelsLenght++;
        }
    }
    console.log(vowelsLenght);
}

countVowels(str);


// Qs5. Write a JavaScript function to generate a random number within a range (start, end)

// function rand(start,end){
//     let randNum = Math.floor(Math.random() * end - start) + start;
//     console.log(randNum);
// }

// rand(5,10);