// ============== //
// String Methods //
// ============== //

// trim Method
// let str = '   Massage  ';
//  str = str.trim();
// console.log(str);


//---- String are Immutable in JS ------//


// ============================= //
// String Methods With Arguments //
// ============================= //


// indexOf MEthod //
// let str2 = "Hello World";
// console.log(str2.indexOf('World'));


// ================ //
//  Methods Chaning //
// ================ //
// let str3 = '    World  '
// let str3Trim = str3.trim();
// console.log('After Trim : ',str3Trim);
// str3Trim = str3Trim.toUpperCase();
// console.log('After UpperCase : ', str3Trim);

// Method Chaning
// let str4 = '    New Massage';
// let newStr = str4.trim().toUpperCase();
// console.log(newStr);





// ================ //
//  Slice Method //
// ================ //
// Returns a part of the orignal strign as a new string //

// let str5 = 'Some Massage';
// let newStr5 = str5.slice(5, str5.length)
// console.log(str5.slice(5, 9));
// console.log(newStr5);
//  console.log(str5.slice(-3));




// =============== //
//  replace Method //
// =============== //
// Searches a value in the string & return a new string with the value replaced.

// let str6 = 'Some Massage';
// str6 = str6.replace('Some', "More");
// console.log(str6);



// ============== //
//  repeat Method //
// ============== //
// Returns a string with the number of copies of a string

// let str7 = 'Some Massage';
// str7 = str7.repeat(3);
// console.log(str7);





// ================== //
//  Practice Question //
// ================== //

// let str8 = 'help!';
// str8 = str8.trim().toUpperCase();
// console.log(str8);

// let nameName = "ApnaCollege";
// console.log( nameName.slice(4,9));

// console.log(nameName.indexOf('na'));

// console.log(nameName.replace('Apna', 'Our'));

// console.log(nameName.slice(4).replace('l', 't').replace('l','t'));  






// ======================= //
//  Array (Data Structure) //
// ======================= //

// let arr = [1.2,3.32,4,545,];
// console.log(arr);


// ============= //
//  Array Method //
// ============= //

// ============= //
//  Push Method  //
// ============= //
// add to end

// let arr2 = ['hello', 'World'];
// arr2.push('Hey World');
// console.log(arr2);


// ============= //
//  Pop Method   //
// ============= //
// Delete form end & reutrn it

// let arr3 = ['hello', 'World'];
// arr3.pop();
// console.log(arr3);



// ================ //
//  Unshift Method  //
// ================ //
// Add to start

// let arr4 = ['Hello', "World" , "Hey"];
// arr4.unshift('Hey World');
// console.log(arr4);



// ================ //
//  shift Method  //
// ================ //
// delete to start

// let arr5 = ['Hello', "World" , "Hey"];
// arr5.shift();
// console.log(arr5.length);


// Example ----------
// let followers = ['a','b', 'c','d'];
// let blocked = followers.shift();
// console.log(followers);
// console.log(blocked);





// ================== //
//  Practice Question //
// ================== //

// let start = ['january', 'july', 'march', 'august'];
// // let final = ['july', 'june', 'march', 'august'];
// start.shift();
// start.shift();
// console.log(start);
// start.unshift('june')
// start.unshift('july');
// console.log(start);




// =============== //
//  indexOf method //
// =============== //

// let primary = ['red', 'yellow', 'blue'];
// primary.indexOf('yellow');
// primary.indexOf('blue');
// primary.indexOf('green');



// =============== //
//  inclues method //
// =============== //
// return true or false

// let primary = ['red', 'yellow', 'blue'];
// primary.includes('red'); // true
// primary.includes('blue'); // true
// primary.includes('green'); // false
// primary.includes('Yellow'); // false




// =============== //
//  concat method  //
// =============== //
// merge 2 arrays

// let primary = ['red', 'yellow', 'blue'];
// let secondary = ['orange', 'green', 'violet'];
// let allColor = secondary.concat(primary)
// console.log(allColor);



// ================ //
//  reverse method  //
// ================ //
// reverse an array

// let primary = ['red', 'yellow', 'blue'];
// // primary.reverse();
// console.log(primary.reverse());



// ============== //
//  slice method  //
// ============== //
//  copies a portion of an array

// let colors = ['red','yellow','blue','orange','pink','white','black'];
// colors.slice();
// colors.slice(2);
// colors.slice(2,5);
// colors.slice(-2);



// ============== //
//  splice method  //
// ============== //
// remove/replace/add element in place 
// splice(start, deleteCount, item0...itemN);

// let colors = ['red','yellow','blue','orange','pink','white','black'];
// colors.splice(4);
// colors.splice(0,1);
// colors.splice(0,1 , "Hello", 'hey');





// ============= //
//  sort method  //
// ============= //
//  sorts an array

// let days= ['monday', 'sunday', 'wednesday', 'tuesday'];
// let alpha = ['a', 'b', 'd', 'a', 'v'];
// // days.sort();
// let numbers = [12,3243,5,56,1,2,3,54,5];
// numbers.sort();



// =================== //
//  Practice Question  //
// =================== //


// let start = ['january', 'july', 'march', 'august'];
// // let final = ['july', 'june', 'march', 'august'];
// start.splice(2,3, "july", 'june');


// let lang = ['c','c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];

// let reverseLang = lang.reverse().indexOf('javascript');
// console.log(reverseLang.indexOf('javascript'));




// =================== //
//  Array References   //
// =================== //

// console.log([1] == [1]);
// console.log();

// let arr = ['a', 'b', 'c'];
// let arrCopy = arr;
// console.log(arr == arrCopy);
// console.log(arr === arrCopy);
// console.log(arr.push('d'));
// console.log(arr);
// console.log(arrCopy);
// console.log(arrCopy.pop());
// console.log( arrCopy);
// console.log(arr);



// =================== //
//   Constant Array    //
// =================== //

// const arr = [1,2,3,4]
// console.log(arr);
// console.log(arr.push(5));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr = [12,34,54]  // NOt change the address
// console.log(arr);




// ================= //
//   Nested Array    //
// ================= //

// let nums = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// console.log(nums[1][1]);


// ==================== //
//  Practice Question   //
// ==================== //

// let game = [
//     ['x', null, 'o'],
//     [null, 'x', null],
//     ['o', null, 'x']
// ]
// console.log(game);
// game[0].splice(1,1,'o');
// game[0][1] = 'o'
// console.log(game);




// =============== //
//  PDF Question   //
// =============== //

// Qs1.  Write  a JavaScriptprogramto get  the  first   n elem  ents   of an array   . [n can  be anypositivenum  ber].For example:for  array[7,  9, 0, -2]  and  n=3Print,[7,  9,

// let array = [7, 9, 0, -2];
// let n = 3;
// let ans = array.slice(0, n);
// console.log(ans);


// Qs2.  Write  a JavaScriptprogramto get  the  last   n elementsof an array   . [n can  be anypositivenum  ber].For example:for  array[7,  9, 0, -2]  and  n=3Print,[9,  0, -2]

// let array = [7, 9, 0, -2];
// let n = 3;
// let ans = array.slice(array.length-n)
// console.log(ans);


// Qs3.  Write  a JavaScriptprogramto checkwhethera stringis blankor no

// let inp    = prompt('Enter the string');
// let input = inp.trim();
// if(input == ''){
//     console.log('String is blank : ',input);
// } else{
//     console.log('String value : ', input);
// }



// Qs4.  Write  a JavaScriptprogramto test   whetherthe  character at the  given(character)indexis lowercase

// let str = 'Hello World';
// let indexx = 8;
// console.log(str[indexx]);
// isLowerCaseAtIndex(str, indexx)
// function isLowerCaseAtIndex(str, indexx) {

//     if (str[indexx].charCodeAt() >= 97 && str[indexx].charCodeAt() <= 122) {
//         console.log("small character");
//     } else {
//         console.log("capital character");
//     }
// }


// Qs5.  Write  a JavaScript program to strip   leadingand  trailingspacesfroma string

// function stripSpaces(str){
//     str = str.trim();
//     console.log(str);
// }
// let str = "      Hello World      ";
// console.log(str);
// stripSpaces(str);



// Qs6.  Write  a JavaScriptprogramto checkif an elem  ent  existsin an arrayor not.

// function checkExists (arr,elm) {
//     let exists = arr.includes(elm);
//     if(exists){
//         console.log(elm, "Element is exists");
//     } else {
//         console.log(elm, "Element is not exists");
//     }

// }
// let array = [12,3,4,45,676,23];
// let element = 5;
// checkExists(array,element);