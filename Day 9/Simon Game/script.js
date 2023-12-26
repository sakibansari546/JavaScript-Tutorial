
let startBtn = document.querySelector('#startButton');
let lvlEl = document.querySelector('#message');
let btns = document.querySelectorAll('.simonButton');
let hiestLvl = document.querySelector('.max-level')

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let hiestLevel = 0;



function displayHighLevel() {
    if (level > hiestLevel) {
        hiestLevel = level
        hiestLvl.innerText = `Hiest - ${hiestLevel}`;
    }
}

startBtn.addEventListener('click', () => {
    if (!started) {
        startGame();

    } else {
        resetGame();
    }
});

function resetGame() {
    userSeq = [];
    gameSeq = [];
    started = false;
    level = 0;
    lvlEl.innerText = `Press the button to start game!`;

    startBtn.innerText = 'Start Game';
    startBtn.style.backgroundColor = '#4caf50';

    // startGame();
}

function startGame() {
    userSeq = [];
    levelUp();
    randBtn();

    started = true;
    startBtn.innerText = 'reset Game';
    startBtn.style.backgroundColor = 'red';
    displayHighLevel();
}

function levelUp() {
    level++;
    lvlEl.innerText = `Level - ${level}`;
}

function randBtn() {
    let randIdx = Math.floor(Math.random() * btns.length);
    let randBtn = btns[randIdx];
    flashRnadBtn(randBtn);

    let randColor = randBtn.id
    gameSeq.push(randColor);
    // console.log(gameSeq);
}

function flashRnadBtn(btn) {
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove('flash');
    }, 250);
}


function btnPress() {

    if (started) {
        let btn = this;
        flashRnadBtn(btn);

        userSeq.push(btn.id);
        // console.log(userSeq);

        checkAns(userSeq.length - 1);
    }
}


for (const btn of btns) {
    btn.addEventListener('click', btnPress);
}


function checkAns(idx) {

    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(() => {
                startGame();
                displayHighLevel();
            }, 400);
        }
    } else {
        lvlEl.innerHTML = `Game over <br> Score - ${level}`
    }
}