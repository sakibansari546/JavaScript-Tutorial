console.log('DOM Events In Js');

// ================ //
// DOM Events In Js //
// ================ //
// Events are singnals that something has occurred. (user input / actions)

// let btn = document.createElement('button');
// let body = document.querySelector('body');
// body.append(btn);

// btn.innerHTML = 'click';

// btn.setAttribute('onclick', 'console.log("Clicked");console.log("Garima")')


// let btn = document.querySelectorAll('button');


// btn.forEach((bnt) => {
//     bnt.onclick = function (btn) {
//         alert(btn.innerHTML);
//     }
// })




// ================ //
// Events Listener  //
// ================ //

// let buttons = document.querySelectorAll('button');
// console.log(buttons);
// for (btn of buttons) {
//     btn.addEventListener('click', (btn) => {
//         sayName();
//         sayHello();
//     });
//     btn.addEventListener('dblclick', ()=>{
//         console.log('Double Clicke');
//     })
// }

// function sayHello(value) {
//     alert('Hello');
// }
// function sayName() {
//     alert('Garima');
// }





// =============================== //
// Activity generate Random Color  //
// =============================== //

// let colorDiv = document.querySelector('.color');
// let bgContainer = document.querySelector('.container');
// let btn = document.querySelector('button');

// btn.addEventListener('click', genrateColor)

// function genrateColor() {
//     let val1 = Math.floor(Math.random() * 255) + 1;
//     let val2 = Math.floor(Math.random() * 255) + 1;
//     let val3 = Math.floor(Math.random() * 255) + 1;
//     // return randomColor = `(${val1},${val2},${val3})`
//     console.log(val1, val2, val3);
//     displayColor(val1, val2, val3);
// }


// function displayColor(val1, val2, val3) {
//     colorDiv.innerText = `rgb(${val1},${val2},${val3})`;
//     bgContainer.style.backgroundColor = `rgb(${val1},${val2},${val3})`
// }






// ======================= //
// this in event listener  //
// ======================= //
// When 'this' is used in a callback of event heandler of something, it refer to that somthing

// let colorBtn = document.querySelector('button');

// let color = ['red', 'blue', 'yellow'];
// let colorIdx = 0;
// colorBtn.addEventListener('click', function () {
//     console.log(this.innerText);
//     if (colorIdx > 2) {
//         colorIdx = 0;
//         this.style.backgroundColor = `${color[colorIdx]}`;
//     } else {
//         this.style.backgroundColor = `${color[colorIdx]}`;
//         colorIdx++;
//     }
//     console.log(colorIdx);

// });




// let colorDiv = document.querySelector('.color');
// let bgContainer = document.querySelector('.container');
// let btn = document.querySelector('button');

// function changeColor() {
//     console.log(this.innerText);
//     this.style.backgroundColor = 'blue'
// }

// colorDiv.addEventListener('click', changeColor);
// bgContainer.addEventListener('click', changeColor);
// btn.addEventListener('click', changeColor);





// ================= //
// Keyborard Events  //
// ================= //


// Deafult Argument //
// let btn = document.querySelector('button');

// btn.addEventListener('click', (event) => {
//     console.log(event);
// });
// btn.addEventListener('dblclick', (event) => {
//     console.log(event);
// });



// let inp = document.querySelector('input');
// let btn = document.querySelector('button');

// inp.addEventListener('keypress', () => {
//     console.log(inp.value);
// });

// inp.addEventListener('keyup', () => {
//     console.log(inp.value);
// });

// inp.addEventListener('keydown', (event) => {
//     console.log(event.key);
//     console.log(event.code);
// });

// inp.addEventListener('keydown', (event) => {
//     if (event.code == 'ArrowUp') {
//         console.log('forword');
//     } else if (event.code == 'ArrowLeft') {
//         console.log('Left');
//     }
//     else if (event.code == 'ArrowLeft') {
//         console.log('Left');

//     } else if (event.code == 'ArrowRight') {
//         console.log('Right');
//     }
//     else if (event.code == 'ArrowDown') {
//         console.log('BackWord');
//     }
// });





// ============ //
// Form Events  //
// ============ //

// let form = document.querySelector('form');
// let btn = document.querySelector('button');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('Form submited ');
// })






// ======================= //
// Extracting Form Events  //
// ======================= //

// let form = document.querySelector('form');
// let btn = document.querySelector('button');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let inp = document.querySelector('input');
//     console.log(inp);
//     console.log(inp.value);
// });


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.dir(form);
//     let inp = form.elements[0];
//     let btn = form.elements[1];
//     console.log(inp);
//     console.log(inp.value);
//     console.log(btn.innerText);
// });



// =========== //
// More Events //
// =========== //

// let inp = document.querySelector('input');
// let form = document.querySelector('form');
// let btn = document.querySelector('button');

// inp.addEventListener('change', () => {
//     console.log('Input Changed');
//     console.log(inp.value);
// });

// inp.addEventListener('input', () => {
//     console.log('Input event');
//     console.log(inp.value);
// });



// let inp = document.querySelector('input');
// let p = document.querySelector('p')
// inp.addEventListener('input', () => {
//     p.innerText = inp.value;
// });



// ============ //
// Practice set //
// ============ //

let inp = document.querySelector('input');

inp.addEventListener('mouseout', () => {
    console.log('Mouse');
    console.dir(inp);
});

inp.addEventListener('keypress', () => {
    console.log('Mouse');
    console.dir(inp.value);
});

document.addEventListener('scroll', (e) => {
    console.dir(window.scroll);
});


