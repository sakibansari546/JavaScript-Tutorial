console.log('Hello World');

// =============== //
// Single Threaded //
// =============== //

// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a + b);

// () => {
// console.log('Apna Collee');
//
// setTimeout(() > {
//     console.log('Apna College');
// }, 2000);
// console.log('Hello..');




// // =============== //
// // call Back  hell //
// // =============== //

// let h1 = document.querySelector('h1');

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         nextColorChange();
//     }, delay);
// }
// // callBack nesting -> callBack hell
// changeColor('red', 1000, () => {
//     changeColor('blue', 1000, () => {
//         changeColor('green', 1000, () => {
//             changeColor('orange', 1000);
//         });
//     });
// });
// // changeColor('green', 3000);


// function saveToDB(data, success, faliure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success(data);
//     } else {
//         faliure();
//     }
// }

// saveToDB('Hello world', (data) => {
//     console.log("your data  was saved : ", data);
//     saveToDB("Hey", (data) => {
//         console.log("Success2 Data2 : ", data);
//         saveToDB("Third Data", (data) => {
//             console.log("Success3 Data3 : ", data);
//         }, () => {
//             console.log("Failure Data3  not Saved: ",);
//         })
//     }, () => {
//         console.log("Failure Data2  not Saved: ",);
//     })

// }, () => {
//     console.log("weak conection. data not saved");
// });


// let Promises = new Promise();



// ======== //
// Promises //
// ======== //
// The Promises object represents the eventual completion (or faliure) of an asynchronous opration and its resulting value
// resolve & reject


// function saveToDB(success, failure) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Success : data was saved");
//         } else {
//             reject("failure : weak conection");
//         }
//     })
// }

// saveToDB("Hello")
//     .then(() => {
//         console.log('promise was fulfiled : ');
//     }).catch(() => {
//         console.log("promise was rejected : ");
//     });



// ================ //
// Promise chaining //
// ================ //

// function saveToDB(data, success, failure) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve(data)
//         } else {
//             reject(data);
//         }
//     })
// }

// saveToDB("Hello")
//     .then((data) => {
//         console.log('Data 1 saved: ', data);
//         saveToDB("Hello world").then((data) => {
//             console.log('Data 2 saved' + data);
//         })
//     }).catch(() => {
//         console.log("promise was rejected : ");
//     });


// saveToDB("Hello")
//     .then((data) => {
//         console.log('Data 1 saved: ', data);
//         return saveToDB("Hello world")
//     }).then((data) => {
//         console.log('Data 2 saved: ', data);
//         return saveToDB("3 data");
//     }).then((data) => {
//         console.log('Data 3 saved: ', data);
//     })
//     .catch(() => {
//         console.log("promise was rejected : ");
//     });



// promise are reject and resolve with some data (valid result and error);

// function saveToDB(success, failure) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Success : data was saved");
//         } else {
//             reject("failure : weak conection");
//         }
//     })
// }



// saveToDB("Hello")
//     .then((result) => {
//         console.log('Data 1 saved: ',);
//         console.log(result);
//         return saveToDB("Hello world")
//     }).then((result) => {
//         console.log('Data 2 saved: ',);
//         console.log(result);
//         return saveToDB("3 data");
//     }).then((result) => {
//         console.log('Data 3 saved: ',);
//     })
//     .catch((error) => {
//         console.log("promise was rejected : ", error);
//     });



// function changeColor(color, delay) {
//     return new Promise((resolve, rject) => {
//         let body = document.querySelector('body')
//         setTimeout(() => {
//             body.style.backgroundColor = color;
//             resolve("color changed!");
//         }, delay);
//     })
// }

// changeColor("red", 1000).then(() => {
//     console.log("red completed");
//     return changeColor("blue", 1000)
// }).then(() => {
//     console.log("blue completed");
//     return changeColor("green", 1000)
// }).then(() => {
//     console.log("green completed");
//     return changeColor("yellow", 1000)
// })