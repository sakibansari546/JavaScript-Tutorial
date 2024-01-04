console.log('Hello world');

// =============== //
// Async Functions //
// =============== //
// async & await Keywords

// async function greet() {
//     throw "404 page not found"
//     return "Hello";
// }
// greet().then((result) => {
//     console.log("promis was fulfiled");
//     console.log(result);
// }).catch((err) => {
//     console.log('Error : ', err);
// })


// let greet = async () => {
//     return "Hello";
// }
// greet().then((result) => {
//     console.log("promis was fulfiled");
//     console.log(result);
// }).catch((err) => {
//     console.log('Error : ', err);
// })


// ============= //
// Await Keyword //
// ============= //
// pauses the execution fo its surrounding anync function until the pormise is settled (resolve & reject)

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let randNum = Math.floor(Math.random() * 10) + 1;
//             console.log(randNum);
//             resolve();
//         }, 1000)
//     });
// }
// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
// }



// function changeColor(color, delay) {
//     let body = document.querySelector("body");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let rndNum = Math.floor(Math.random() * 5) + 1;
//             if (rndNum > 3) {
//                 reject("promise Reject");
//             }
//             body.style.backgroundColor = color;
//             console.log("Collor : ", color);
//             resolve("color changed");
//         }, delay);
//     })
// }

// async function demo() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("green", 1000);
//         await changeColor("purple", 1000);
//         await changeColor("gray", 1000);
//     } catch (error) {
//         console.log("error", error);
//     }

//     let a = 5;
//     console.log(a + 7);
// }




// ====================================== //
// Application Programing Interface (API) //
// ====================================== //

// ============================== //
// JSON JavScript Object Notation //
// ============================== //


// Accessing Data from JSON
// JSON.parse(data) Method
// -> To parse a string data into a JS Object

// let jsonRes = '{"fact":"People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.","length":165}'

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// JSON.stringify(json) Method
// -> TO parse JS object data into JSON

// let student = {
//     name: 'Garima',
//     age: 17,
// }

// let json = JSON.stringify(student);
// console.log(json);



// ===================== //
// TTesting API requesst //
// ===================== //
// Tools

// • Hoppscoth
// • Postman