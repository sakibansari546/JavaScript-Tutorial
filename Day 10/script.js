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
console.log('Apna Collee');
// 
// setTimeout(() > {
//     console.log('Apna College');
// }, 2000);
// console.log('Hello..');




// // =============== //
// // call Back  hell //
// // =============== //

// // let h1 = document.querySelector('h1');

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



// ======== //
// Promises //
// ======== //
// The Promises object represents the eventual completion (or faliure) of an asynchronous opration and its resulting value

// callBack Hell
function saveToDB(data, success, faliure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success(data);
    } else {
        faliure();
    }
}

saveToDB('Hello world', (data) => {
    console.log("your data  was saved : ", data);
    saveToDB("Hey", (data) => {
        console.log("Success2 Data2 : ", data);
        saveToDB("Third Data", (data) => {
            console.log("Success3 Data3 : ", data);
        }, () => {
            console.log("Failure Data3  not Saved: ",);
        })
    }, () => {
        console.log("Failure Data2  not Saved: ",);
    })

}, () => {
    console.log("weak conection. data not saved");
})


// let Promises = new Promise();
