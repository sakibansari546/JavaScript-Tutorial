// =============== //
//   Loops in JS   //
// =============== //
// Use to iterate a piece of code

// ============= //
//   For Loops   //
// ============= //
// for (initialisation; condition; updation) {
//     // DO Something
// }

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// Odd number 1 to 15
// for (let i= 1; i <= 15; i++) {
//     if(i % 2 == 1){
//         console.log(i,' : is odd number');
//     }
// }



// Even number 2 to 10
// for (let i = 2; i <= 10; i = i + 2) {
//     console.log(i, ' : is Even number');
// }

// ================= //
//  Infinite Loops   //
// ================= //

// for(let i=1; i>=0; i++){

// }
// for(let i=1; i<=5; i--){

// }
// for(let i=1; ; i++){

// }


// Print th emultiplication table for 5
// let n = 5;
// for(let i = 1; i <= 10; i++){
//     let mult = n * i;
//     console.log(mult);
// }


// =============== //
//  Nested Loops   //
// =============== //

// for(let i = 1; i <= 10; i++){
//     console.log(i);
//     for(let j = 1; j <= 10; j++){
//         console.log(j);
//     }
// }




// ============== //
//  While Loops   //
// ============== //

// let i = 0; 
// while(i<= 10){
//     console.log(i);
//     i++;
// }

// while(i <=20) {
//     console.log(i);
//     i++;
// }




// Practice 

// let favMovie = 'Avatar';
// let user;
// user = prompt("Guess The Fav Movie : ");
// console.log(user);

// while (favMovie != user) {
//     if (user == "quit") {
//         console.log('Ok! Game was Quit');
//         break;    
//     }
//     console.log('Wrong');
//     user = prompt("Wrong Guess Please try again! : ");
// }




// ============== //
//  Break Keyword //
// ============== //
// let i = 1;
// while(i <= 5) {
//     if (i == 3) {
//         break; 
//     }
//     console.log(i);
//     i++;
// }





// ================= //
//  Loops with Array //
// ================= //
// let fruits = ['mango', 'apple', 'banana', 'litchi', 'orange', 'date'];

// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     console.log(i,element);
// }

// for (let i = fruits.length-1; i >= 0; i--) {
//     const element = fruits[i];
//     console.log(i,element);
// }




// =============== //
//  For of Loops   //
// =============== //
// let fruits = ['mango', 'apple', 'banana', 'litchi', 'orange', 'date'];

// for(fruit of fruits){
//     if(fruit == 'litchi'){
//         break;
//     }
//     console.log(fruit);
// }



// ====================== //
//  Nested For of Loops   //
// ====================== //
// let heros = [
//     ['SuperMan', 'BatMan', 'Thor', 'Dr. Strange'],
//     ['SpiderMan', 'IronMan', 'Black Widow', 'wonder Woman']
// ]

// for(list of heros){
//     console.log(list);
//     for (const name of list) {
//         console.log(name);

//     }
// }



// ================= //
//  Small TODO App   //
// ================= //

// let todo = [];

// let req = prompt('Please Enter your Request');

// while(true){
//     if(req == "quit"){
//         console.log('Quit The ToDo');
//         break;
//     }
//     if(req == "list"){
//         console.log('-------------------------');
//         for(let i = 0; i <= todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log('-------------------------');
//     } else if(req == 'add'){
//        let task = prompt('please Enter the your task');
//        todo.push(task);
//        console.log('Task added!');
//     } else if(req == 'delete'){
//         let idx = prompt('Enter your undex for delete the task');
//         todo.splice(idx, 1);
//         console.log('task deleted!');
//     }
//     else{
//         req = prompt('Please Enter the valid request');
//     }
//     req = prompt('Please Enter your Request');

// }






// ===================== //
//  Practice Questions   //
// ===================== //
// Qs1.  Write  a JS programto deleteall  occurrencesof element‘num’in a givenarray   .Example  : if arr  = [1,  2, 3, 4, 5, 6, 2, 3]&num  = 2Result should be arr  = [1,  3, 4, 5]

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);



// Qs2.  Write  a JS programto find  the  no of digitsin a number.Example  : ifnum  ber  = 287152,count= 6

// let number = 122343;
// let count = 0; 
// let copy = number;
// console.log(typeof copy);
// while(copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);


// Qs3.  Write  a JS programto find  the  sum  of digitsin a number.Example  : ifnum  ber  = 287152,sum  = 25


// Qs5.  Find  the  largestnum  ber  in an arraywith   only   positivenum  bers.

// let arr = [2, 3, 34, 54, 6, 6, 7, 8,];
// let largest = 0;

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(largest < element){
//         largest = element
//     }   
// }
// console.log(largest);