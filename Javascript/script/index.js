//alert("Hello World!")
// console.log("Hello World!");
// console.log("This is a new line of code");

//math
//conditions

//operations - operators
//art - +, -, *, /,  %, **
//comp - >, <, >= , <= , !=, ==, ===, !==
//logical - and, or , not
// AND (&&)
// input1  input2  output
// true    true    true
// true    false   false
// false   true    false 
// false   false   false

// OR(||)
// input1  input2  output
// true    true    true
// true    false   true
// false   true    true 
// false   false   false

// Not(!)
// input   output
// true    false 
// false   true

//inc and dec - ++, --
// value by 1 inc or dec
// value -> variable

// pre  - inc or dec
// - value - update -> operation  -> symbol variable
// post  - inc or dec  
// - operation -> value - update  -> variable
// let a = 5;
// console.log(a ++); //5 a - 6
// console.log(++ a); // 6 + 1 = 7  7

//bitwise - &, |, ~, ^, <<, >>
// number -> binary -> operations
// 2^3 2^2 2^1 2^0
// 8   4   2   1    =   15
// 0    0   0   1
// 0    0   1   0
// 0    0   1   1   
// 0    1   0   0
// 0    1   0   1
// 0    1   1   0
// 0    1   1   1
// 1    0   0   0

// console.log(5 & 4);
// console.log(8 & 3);

// console.log(5 | 3);

// console.log(6 ^ 4)
// console.log((7 ^ 4) + (6 & 8)); // 3 | 4` 

// console.log(~-5);

// console.log(~-112);

// console.log(~12 + (5 ^ 4) - (5 | 2) * (2 & 7)); //-12  -36  -23  0  
//2 7 1-13
// console.log(4 << 2);
//left shift - 4 << 2
// --------------------

// 0   0   0   0   0   1   0   0
// ------------------------------
// 0   0   0   0   1   0   0   0
// -------------------------------
// 0   0   0   1   0   0   0   0

// console.log(4 >> 2);
//right shift 4 >> 2

// 0   1   0   0 |
// ------------------
// 0   0   1   0 
// ----------------
// 0   0   0   1 -  1

// 0   1   1   0
// 0   1   0   0
// --------------
// 0   0   1   0

// 0   1   0   1
// 0   0   1   1
// --------------

// 0   1   0   1
// 0   1   0   0
// ---------------

//conditional
//assignment - =

// variables : temp storage for data
// data -> type - number, String, boolean, array, objects
// js is dynmically typed lang
//Rules - 0-9 - no, sc - $,_ - no, keywords - no
//var - ES6, let, const
// let a = "4";
// let b = 5;

// perform arth ops for a and b and store the result in a variable

// console.log(typeof(a));
// console.log(a == b);

// const userName = "Hari Kumar";
// const password = "1234";

// let name = "Hari Kumar";
// let pass = "1234";

// (condition) ? true block : false block;

// (userName == name && password == pass) ? console.log("user logged in") : console.log("user not found");





// 4,6

// 4 > 6 - true - left side -largest | false - right side largest

// let a  = 14;
// let b = 6;
// console.log((a > b)? a+" is largest number" : b+" is largest number");

/* 
    multiple conditions and multiple statements -> conditional oper - fail

    conditional statements : 
        1. we can write multiple statements inside it.
        2. will also reduce the complexity of handling multiple conditions

        1. simple if/ if
        2. if else
        3. if else if
        4. switch
        5. nested conditional statements
*/

/* 
    90 - O grade
    70 - 90 - A grade
    50 - 70 - B grade
    30 - 50 - c grade
    < 30 - fail
*/

// let marks = 89;

// if(marks >= 90){
//     console.log("O grade");
// }else if(marks >= 70){
//     console.log("A grade");
// }else if(marks >= 50){
//     console.log("C grade");
// }else if(marks >= 30){
//     console.log("D grade");
// }else if(marks < 30){
//     console.log("fail");
// }else{
//     console.log("always fail");
// }

// switch - input  
//     - cases
//         - case value

// let userInput = Number(prompt("Enter your number : "));
// console.log(userInput);

// let input = 1;

// switch(userInput){
//     case 1:
//         console.log("stmnt 1");
//         console.log("stmnt 1");
//         console.log("stmnt 1");
//         console.log("stmnt 1");
//         break;
//     case 3:
//         console.log("stmnt 3");
//         console.log("stmnt 3");
//         console.log("stmnt 3");
//         console.log("stmnt 3");
//         break;
//     default : 
//         console.log("not able to find the proper case");
//         break;
//     case 2:
//         console.log("stmnt 2");
//         console.log("stmnt 2");
//         console.log("stmnt 2");
//         console.log("stmnt 2");
//         break;
// }





// loops - block of code -> executes repeatedly
//3 types of loops
// 1. for loop
// 2.  while loop
// 3. do-while loop

//starting point    -   optional
// condition    -   true
//update    -   inc or dec  - value change (optional)

/* 
    for(init; condition; update){
        //block of code
    }

    1 - init
    2. condition - true - block - execute or else will exit the loop
    3.block of code
    4. update
*/



// for(let i = 1; i <= 1000; i ++){
//     console.log(i);
// }

/* 
    while - loop

    init;
    while(condition){
        //block of code
        update
    }
*/

// let i = 1; 
// while(i <= 10){
//     console.log(i);
//     i ++;
// }
// let i = true;

// while(i){
//     let number = Number(prompt("Enter a number to check if it is a +ve or -ve"));
//     if(number >= 0){
//         console.log("positive");
//     }else if(number < 0){
//         console.log("negative");
//     }else{
//         console.log("not a number")
//     }

//     let choice = prompt("Do you want to check another number : (yes or no)");
//     if(choice == "Yes" || choice == "yes"){
//         i = true;
//     }else{
//         i = false;
//     }
// }

/* 
    do - while : 
        syntax : 
            init;
            do{
                block of code
                update
            }while(condition);
*/

// let i = 1;

// while(i < 10){
//     console.log("while loop");
//     i ++;
// }

// i = 1;
// do{
//     console.log("do while loop");
//     i ++;
// }while(i < 10);

// console.log(i);

// for(let i = 1; i < 10; i ++){
//     console.log(i);
// }


// for(let i = 1; i <= 10; i ++){
//     if(i >= 3 && i <= 7)
//         break;
//     console.log(i);
// }

// for(let i = 1; i <= 5; i ++){
//     for(let j = 1; j <= i; j ++){
//         console.log(i+" ")
//     }
// }

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// array -> access -> index values (0 - arraysize - 1)
// a = [1,2,3,4,5,6,7];

//ending
//remove
// a.pop();
// //add
// a.push(34,35,36);
// //starting
// //remove
// a.shift();
// //add
// a.unshift(45);
// //middle/ inbetween
// //remove
// console.log(a);
// a.splice(3,1);

// //add
// console.log(a);
// a.splice(3,1,55);

// // a.sort();
// a.reverse();

// console.log(a);

// console.log(a.indexOf(34));
// console.log(a.includes(34));


// for(let i = 0; i < a.length; i ++){
//     console.log(a[i]);
// }


/* 
    functions : 
        Any action - reaction(optional)
        number prime?
            -   1 and itself - 2 times - remainder - 0
            1   -   non prime number - 
            2   -   2/1 2/2
            5   -   5/1 .... 5/5 - remainder - 0 -count

            number

            1 to number -> modulo division  -   0   -   count ++

            count is equal to 2
                number is a prime number
*/

//127, 134, 76, 58, 59, 30

//convert all the assigment questions into functions
//write a program to find the even numbers inside an array
//write a program to find the sum of numbers inside an array
//write a program to find the sum of even numbers inside an array
//write a program to find the sum of odd numbers inside an array
//write a program to find the even numbers upto 100, 1000
//write a program to find the odd numbers upto 100, 1000
//find the sum of natural numbers upto 20
//write a program to check if a give number is prime number or not
//write a program to find the prime numbers upto 100
//write a program to check the largest number between two numbers and three numbers
//write a prgram to check the smallest number between two numbers and threen numbers
//write a program to find the largest of two, three, four numbers - give by user
//write a program to find the even number 
//write a program to find the odd number
//write a program to square a number and check if the square number is even number or not
// ex : 3 ^ 2 - 9 - not an even Number

function isPrimeNumber(number){
    let count = 0;

    for(let i = 1; i <= number; i ++){
        if(number % i == 0)
            count ++;
    }

    if(count == 2){
        return number+" is a prime number";
    }else{
        return number+" is not a prime number";
    }
}

console.log(isPrimeNumber(78));
console.log(isPrimeNumber(18));
console.log(isPrimeNumber(38));
console.log(isPrimeNumber(37));
console.log(isPrimeNumber(29));
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(5));


