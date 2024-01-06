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
// Testing API requesst //
// ===================== //
// Tools

// • Hoppscoth
// • Postman


// ================== //
// First API requesst //
// ================== //
// using fetch

// const URL = 'https://icanhazdadjoke.com/';
// let url = "https://catfact.ninja/fact"
// fetch(url).then((response) => {
//     console.log(response);
//     let res = response.json();
//     return res
// }).then((data) => {
//     console.log(data.fact);
//     return fetch(url);
// }).then((res) => {
//     return res.json();
// }).then((data2) => {
//     console.log("Data2 : ", data2.fact);
// }).catch((err) => {
//     console.log(err);
// })



// ============================= //
// API request using async await //
// ============================= //

// let url = "https://catfact.ninja/fact";
// async function getFact() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res.json();
//         console.log(data2.fact);

//     } catch (error) {
//         console.log("Error : ", error);
//     }
// }


// ===== //
// Axios //
// ===== //
// Library to make HTTP requests

// let url = "https://catfact.ninja/fact";

// async function getFact() {
//     try {
//         let res = await axios.get(url);
//         // let data = await res.json();
//         console.log(res.data.fact);

//         // let res2 = await fetch(url);
//         // let data2 = await res.json();
//         // console.log(data2.fact);

//     } catch (error) {
//         console.log("Error : ", error);
//     }
// }


// let catFact = document.getElementById('cat-fact');
// async function getFact() {
//     try {
//         let res = await axios.get(url);
//         catFact.innerText = res.data.fact
//         // throw new Error("Error")
//     } catch (error) {
//         catFact.innerText = error;
//     }
// }

// getFact();
// let btn = document.querySelector("button")

// btn.addEventListener("click", async () => {
//     getFact();
// });



// let url = 'https://dog.ceo/api/breeds/image/random';

// let img = document.querySelector("img")
// async function getFact() {
//     try {
//         let res = await axios.get(url);
//         console.log(res);
//         img.src = res.data.message
//             ;
//         // throw new Error("Error")
//     } catch (error) {
//         console.log('Error : ', error);
//         img.parentElement.innerHTML = error
//     }
// }
// getFact()
// let btn = document.querySelector("button")

// btn.addEventListener("click", async () => {
//     getFact();
// });



// Acios
// Sending Hraders

// let url = "https://catfact.ninja/fact";
// async function getJoke() {
//     try {
//         const config = { headers: { Accept: "application/json" } }
//         let res = await axios.get(url, config)
//         console.log(res.data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getJoke() 