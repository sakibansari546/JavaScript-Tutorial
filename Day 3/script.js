// ================ //
// Object Literals  //
// ================ //
// Ussed to store keyed collection & complex entities.

// let arr = [];
// console.log(typeof arr);

// const student = {
//     name : 'Sakib',
//     class: 12+'I',
//     age : 17
// }

// console.log(student);

// const item = {
//     price : 100.99,
//     discount : 50,
//     colors : ['red', 'pink'],
// }

// console.log(item.colors[1]);


// ==================== //
// Thread/Twitter post  //
// ==================== //
// let post = {
//     username: '@Sakib',
//     content: "lorem ipsum dolor",
//     likes: 20,
//     reposts: 1,
//     tags: ['@apnaCollege', '@sakibansari']
// }

// console.log(post['username']);
// console.log(post.content);





// =================== //
// Add/Update Values   //
// =================== //
// const student = {
//     name : 'Sakib',
//     age : 17,
//     marks : 94.4,
//     city : 'Delhi'
// }

// student.city = 'Chandigrah';
// console.log(student);

// student.gender = 'Male';
// console.log(student);

// student.marks = 'A';
// console.log(student);

// delete student.age;
// console.log(student);




// ================== //
// Object of object   //
// ================== //
// const classInfo = {
//     aman : {
//         grade : "A+",
//         city : 'Delhi'
//     },
//     shradha : {
//         grade : 'A',
//         city : 'Pune'
//     },
//     karan : {
//         grade : 'B',
//         city : 'Himachal'
//     }
// }
// classInfo.shradha.city = 'Gurgaon'

// console.log(classInfo.shradha.city);




// ================== //
// Array  of object   //
// ================== //

// const classInfo = [
//     {
//         name : 'aman',
//         grande : 'A+',
//         city : 'Delhi'
//     },
//     {
//         name : 'shradha',
//         grande : 'A',
//         city : 'Pune'
//     },
//     {
//         name : 'karan',
//         grande : 'B',
//         city : 'Mumbai'
//     },
// ];

// console.log(classInfo);
// console.log(classInfo[0].name);





// ============= //
// Math object   //
// ============= //

// console.log(Math.PI);
// console.log(Math.E);



// ==================== //
// Math object Method   //
// ==================== //

// console.log(Math.abs(-12.43));
// console.log(Math.pow(2, 4));
// console.log(Math.floor(2.34));
// console.log(Math.ceil(-5.5));
// console.log(Math.random());

// Random Integers
// let step1 = Math.random();
// let step2 = step1 * 10;
// let step3 = Math.floor(step2);
// console.log(step3);


// let rand = Math.floor(Math.random() * 10) + 1;
// console.log(rand);


// Q. Generate a random number netween 1 to 100
// let rand = Math.floor(Math.random() * 100) + 1;
// console.log(rand);

// let rand = Math.floor(Math.random() * 5) + 1;
// console.log(rand);


// let max = prompt('Enater a max number');
// max = parseInt(max);

// let rand = Math.floor(Math.random() * max) + 1;
// console.log(rand);

// let guess = prompt('Guess the number');

// while (true) {
//     if (guess == 'quit') {
//         console.log("You Quit Game!");
//         break;
//     }
//     if (guess == rand) {
//         console.log('Congratulation! YOur Guess is right');
//         break;
//     } else if (rand > guess) {
//          guess = prompt('Your Guess is small!');
//     } else if(rand < guess){
//         guess = prompt('Your Guess is large!');
//     }
// }





// ==================== //
// Practice Question    //
// ==================== //
// Qs1.  Createa program that generatesa random number representing a dice   roll.[T he num  ber  shouldbe between1 and 6].

// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);


// Qs2.  Createan objectrepresentinga car  that   storesthe  followingpropertiesfor  thecar:   nam  e, model,color   .Printthe  car  ’s n


// let cars = {
//     name : 'Aoudi',
//     model : 1995,
//     color : 'black'
// }
// console.log(cars.name);


// Qs3.  Createan objectPersonwith   their   nam  e, age  and  city  .Edit   their   city’   s originalvalueto changeit to “NewYork”.Add   a new  propertycountryand  set  it to the  UnitedStates.

// let person = {
//     name : 'Sakib',
//     age : 17,
//     city : 'Paris'
// }
// person.city = 'New York';
// person.country = 'United State';
// console.log(person);