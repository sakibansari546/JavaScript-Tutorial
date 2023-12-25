// =============== //
//  Events Bubling //
// =============== //

// let nav = document.querySelector('nav');
// let ul = document.querySelector('ul');
// let lis = document.querySelectorAll('li');

// nav.addEventListener('click', () => {
//     console.log('Nav was click');
// });

// ul.addEventListener('click', (event) => {
//     event.stopPropagation()
//     console.log('Ul was click');
// });

// lis.forEach((li) => {
//     li.addEventListener('click', (event) => {
//         event.stopPropagation()

//         console.log('li was click');
//     });
// });



// ========= //
//  TODO App //
// ========= //
// let form = document.querySelector('form');
// let addBtn = document.querySelector('.addBtn')
// let taskInp = document.querySelector('#taskInput')
// let taskList = document.querySelector('#taskList');
// console.log(taskList);

// addBtn.addEventListener('click', () => {
//     let list = document.createElement('li');
//     list.innerHTML = `<span>${taskInp.value}</span>
//     <button onclick=" // removeTask(this)" id="reome">remove</button>`;
//     if (taskInp.value != '') {
//         taskList.appendChild(list);
//     }
//     // console.log(list);
//     taskInp.value = ''

// });

// taskList.addEventListener('click', (e) => {
//     console.dir(e.target.nodeName);
//     if (e.target.nodeName == 'BUTTON') {
//         let list = e.target.parentElement;
//         list.remove();
//     }
// })

// // function removeTask(button) {
// //     let list = button.parentElement;
// //     list.remove();
// // }





// ================= //
//  Saimon Says Game //
// ================= //
// let btns = document.querySelectorAll('.simonButton');
// let startBtn = document.querySelector('#startButton');
// let lvlEl = document.querySelector('#message');
// let btns = document.querySelectorAll('.simonButton');
// let gameSeq = [];
// let userSeq = [];

// let started = false;
// let level = 0;

// // let colorBtns = ['green', 'red', 'yellow', 'blue']

// startBtn.addEventListener('click', () => {
//     if (started == false) {
//         // console.log('Game Started');
//         startGame();
//         started = true;
//     }
// });

// function startGame() {
//     userSeq = [];

//     level++;
//     lvlEl.innerText = `Level ${level}`;

//     let randIdx = Math.floor(Math.random() * btns.length);
//     let randBtn = btns[randIdx];

//     gameSeq.push(randBtn.id);
//     console.log(gameSeq);

//     buttonFlash(randBtn);
// }

// function buttonFlash(btn) {
//     btn.classList.add('flash')
//     setTimeout(() => {
//         btn.classList.remove('flash');
//     }, 250);
// }


// function checkAns(idx) {
//     if (userSeq[idx] === gameSeq[idx]) {
//         if (userSeq.length == gameSeq.length) {
//             setTimeout(() => {
//                 startGame();
//             }, 300)
//         }
//     } else {
//         lvlEl.innerText = `Game Over`;
//         resetGame();
//     }
// }


// function resetGame() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
//     for (btn of btns) {
//         btn.setAttribute('disabled', 'true');
//     }
// }

// function btnPress() {
//     let btn = this;
//     buttonFlash(btn);

//     userColor = btn.id;
//     // console.log(userColor);

//     userSeq.push(userColor);
//     // console.log(userSeq);
//     checkAns(userSeq.length - 1);
// }

// for (let btn of btns) {
//     btn.addEventListener('click', btnPress);
// }













