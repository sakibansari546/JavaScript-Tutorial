// ====================== //
// Array Call Back Method //
// ====================== //


// ============== //
// ForEach Method //
// ============== //
// let array = [1, 2, 3, 4, 5];

// function print(el) {
//     console.log(el);
// }

// array.forEach(print);

// array.forEach((el) => {
//     console.log(el);
// })



// let arr = [
//     {
//         name: 'sakib',
//         age: 17,
//     },
//     {
//         name: '',
//         age: 17
//     },
//     {
//         name: 'None',
//         age: 18
//     },
// ]


// arr.forEach((el) => {
//     console.log(el.name);
// });





// ========== //
// Map Method //
// ========== //
// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

// let num = [1, 2, 3, 4, 5];

// let numX2 = num.map((el) => {
//     return el * 2;
// })
// console.log(numX2);




// let arr = [
//     {
//         name: 'sakib',
//         age: 17,
//         marks: 60,
//     },
//     {
//         name: '',
//         age: 17,
//         marks: 89,
//     },
//     {
//         name: 'None',
//         age: 18,
//         marks: 78
//     },
// ]

// let gpa = arr.map((el) => {
//     return el.marks / 10
// });
// console.log(gpa);



// ============= //
// Filter Method //
// ============= //

// let num = [1, 2, 3, 45, 5, 2, 6, 6, 6, 4, 34, 3];

// let even = num.filter((el) => {
//     return el % 2 == 0;
// });

// console.log(even);




// ============= //
// Every  Method //
// ============= //
// Returns true if eavery element of array give true go dome function. Else returns false

// let even = [2, 5, 4, 6, 8];
// let not = even.every((el) => {
//     return el % 2 == 0;
// });
// console.log(not);


// ============ //
// Some  Method //
// ============ //
// Returns true if a single element of array give true go dome function. Else returns false
// let even = [1, 5, 3, 3, 1];
// let not = even.some((el) => {
//     return el % 2 == 0;
// });
// console.log(not);



// ============ //
// Reduce Method //
// ============ //

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.reduce((sum, el) => {
//     console.log(sum);
//     return sum *= el;
// })

// console.log(newArr);


// let arr = [2, 23, 34, 5456, 23, 22];

// let max = arr.reduce((max, el) => {
//     if (max < el) {
//         console.log('elem');
//         return el;
//     } else {
//         console.log('max');
//         return max;
//     }
// })

// console.log(max);


// Practice Question
// cheach if all numbers in our array are multiple of 10 or not

// let arr = [10, 40, 50, 10, 10,];

// let multiple = arr.every((el) => el % 10 == 0);
// console.log(multiple);

// create a function to find the min number in an array.


// let arr = [10, 40, 50, 10, 10,];

// let min = arr.reduce((min,el)=>{
//     if(min > el){
//         return el;
//     }else{
//         return min;
//     }
// });
// console.log(min);



// ================= //
// Deafult Parameter //
// ================= //
// Giving a deafult value to the argument

// function func (a, b =2){
//     // do something
// }

// function sum(a, b=7) {
//     return a + b;
// }
// console.log(sum(1));



// ======= //
// Spread  //
// ======= //
// Ecpand an iterable onto multiple value
// let arr = [2, 23, 4, 56, 9, 64, 546, 65, 1]
// console.log(Math.min(...arr));
// console.log(...arr);
// function min(...arr) {
// }
// min(arr);



// Spread With Object Literals

let data = {
    email: 'coclover#gmail.com',
    pass: '34234234sad'
};

const dataCopy = { ...data, }

console.log(dataCopy);

// let arr = [32, 34, 54, 65, 23];
// const obj1 = { ...arr };

// let str = "Hello";
// let obj2 = { ...str };



// ======= //
//   Rest  //
// ======= //
// Allows a funtion to take an indefinete number of argument anf bundle them in an array


// function sum(...args) {
//     for (let i = 0; i < args.length; i++) {
//         const element = args[i];
//         console.log(element);
//     }
// }
// function min() {
//     console.log(arguments);
//     console.log(arguments.length);
// }

// function sum(...args) {
//     return args.reduce((sum, el) => sum + el);
// }
// let arr = [23, 3, 4, 5, 6]
// sum(...arr);




// ============== //
// Destructuring  //
// ============== //

// let names = ['tony', 'bruce', 'steve', 'peter'];
// let winner = names[0];
// let runnerup = names[1];
// let secondrunnerup = names[2];

// let [winner, runnerup, secondRunnerup] = names;
// let [winner, runnerup, ...others] = names;

// console.log(winner, runnerup, others);



// ============== //
// Destructuring  //
// ============== //

// const students = {
//     name: 'sakib',
//     class: 12,
//     age: 17,
//     subject: ['IT', "Web"],
//     username: "@sakibGari",
//     password: "SakibGarima",
// }
// let username = students.username;
// let password = students.password;
// console.log(username, password);

// let { username, password, name } = students;
// console.log(username, password, name);


// let { username: user, password: sec, name } = students;
// console.log(user, sec);


// ============ //
// Practice set //
// ============ //

// Qs1.  Square and  sum  the  array elements using the  arrowfunction and  then   find  the average of the  array

// const numbers = [1, 2, 3, 4, 5];

// const sqr = numbers.map((el) => el * el);
// console.log(sqr);

// const sqrSum = sqr.reduce((sum, el) => sum + el);
// console.log(sqrSum);

// let avg = sqrSum / numbers.length;
// console.log(avg);

// const sumOfSqr = (num) => {
//     let sqr = num.map((el) => el * el);
//     let sqrSum = sqr.reduce((sum, sqr) => sum + sqr);
//     let avg = sqrSum / num.length
//     return avg;
// }

// console.log(sumOfSqr(numbers));


// Qs2.  Createa new  array using the  map function whose each element  is equal to the original element plus 5

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((el) => el + 5);
// console.log(newArr);


// Qs3.  Create a new  array whose elements are  in uppercase of words present in the original array

// let arr = ['apple', 'banana', "cherry", 'mango'];

// let upperChar = arr.map((word) => {
//     return word.toUpperCase();
// });

// console.log(upperChar);



// Qs4.  Write  a function called double And Return Args  which accepts  an array and  a variable number  of arguments.The function should return a new  arra ywith the  original array values and  all  of the  additional arguments doubled;

// let arr = [1,2,4,5,6];
// let additionalArr = [2,3,43,5,46];

// function doubleAndReturnArgs(arr, ...args){
//     const doubleArray = arr.map((el) => el * 2);
//     const doubleArgs = args.map((el) => el * 2);
//     const finalArray = doubleArray.concat(doubleArgs);
//     return finalArray;
// }

// let result = doubleAndReturnArgs(arr,additionalArr);
// console.log(result); 



// Qs5.  Write  a function called mergeObjects that   accepts two  objects and  returns a newobject which contains all  the  keys and  values of the  first   object and  second object.

let obj1 = {
    name: 'Sakib',
    class: 12,
    age: 17,
    marks: 78
}

let obj2 = {
    name: 'Garima',
    class: 12,
    age: 17,
    marks: 98
}

let marojb1 = { ...obj1, ...obj2 };
console.log(marojb1);
