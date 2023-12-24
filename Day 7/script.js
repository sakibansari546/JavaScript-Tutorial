console.log('Hello');


// let img = document.getElementById('card-img-1');
// console.log(img);

// let className = document.getElementsByClassName('card');
// console.log(className);


// let tags = document.querySelector('labe');
// let claess = document.querySelector('.card');
// let id = document.querySelectorAll('#card-img-1');
// let label = document.querySelectorAll('label');
// label.forEach((l) => {
//     l.style.color = 'white';
// });


// // Manipulet lating Attribute //
// let imgId = img.getAttribute('id');
// let imgIdSet = img.setAttribute('id', 'imgId');
// let imgClass = img.getAttribute('class');
// let imgClassSet = img.setAttribute('class', 'imgId');


// img.style.width = '100px';

// let card = document.querySelector('.card');
// console.log(card);
// card.style.backgroundColor = '  '
// card.style.backdropFilter = 'blur(1px)'



// Class List //
// let card = document.querySelector('.card');
// card.classList.remove('active');
// card.classList.add('active');
// card.classList.remove('active');
// card.classList.toggle('active');

// card.setAttribute('class', 'active');


// let caedImg = document.querySelector('#card-img-1');
// console.log(caedImg.parentElement);
// console.log(caedImg.previousElementSibling);
// console.log(caedImg.nextElementSibling);

// Adding Element //

// let newBtn = document.createElement('button');
// let newDiv = document.querySelector('.newDiv');
// console.log(newBtn);

// newBtn.innerText = 'Click';
// console.log(newBtn);


// newDiv.setAttribute('class', 'NewDiv');

// newDiv.appendChild(newBtn);



// Practice Question

// let para = document.createElement('p');
// let h3 = document.createElement('h3');
// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let divPara = document.createElement('p');

// para.innerText = 'Hey I am Para1';
// h3.innerText = 'Hey i am h3 whit blue color';
// h1.innerText = 'I am in div';
// divPara.innerText = 'me too';

// let body = document.querySelector('body');

// body.prepend(para);
// body.prepend(h3);
// body.prepend(div);
// div.append(h1, divPara);
// // div.append(divPara);

// body.classList.remove('bg-dark');

// para.classList.add('paraColor')
// div.classList.add('divStyle')
// h3.classList.add('h3Color')



// Practice Set //

// Qsl. Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me' 

let input = document.createElement('input');
let btn = document.createElement('button');

btn.innerText = 'Click Me';
let body = document.querySelector('body');
body.append(input, btn);

// Qs2. Add following attributes to the element :  Change placeholder value of input to "username"  Change the id of button to "btn' 

input.setAttribute('value', 'username');
btn.setAttribute('id', 'btn');


// Qs3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white

let btnn = document.querySelector('#btn');
console.log(btnn);
btnn.style.backgroundColor = 'blue'
btnn.style.color = 'white'


// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. Change its color to purple. 

let h1 = document.createElement('h1');
h1.innerText = 'DOM Practice';
h1.style.color = 'white'
h1.classList.add('h1Style')
body.append(h1);