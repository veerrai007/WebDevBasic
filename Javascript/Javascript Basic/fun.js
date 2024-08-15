// function myalert(text){
//     alert(text.toUpperCase())
// }

// myalert("hello")

//...................................................

// let sum = function(a,b){
//     if(a===undefined || b === undefined){
//         alert("please enter value of a and b")
//     }

//     else{
//         alert(a+b)
//     }
// }

// sum()

//...................................................

// let sum = function(a,b){
//     console.log(a+b+1)
//     return a+b
    
// }

// let result = sum(2,3)
// console.log(result)

//............................factorial of a number using recursion............

// function factorial (n){
//     return n === 0 ? 1:n*factorial(n-1)
// }

// console.log(factorial(5))


//.............................Arguments: agar kush bhi accept na krre ho fir bhi value pass krde to argument usko use krta hai ...........

// let fun = function(){
//     return [...arguments].reduce((a,b)=>a+b)
// }
// console.log(fun(2,3,4,6,7,10))

//..............................Apply and Call function.........

// function print(greet){
//     console.log(greet ,this.name.toUpperCase())
// }
// const person = {name:"Veer"};
// print.apply(person,["Hello"])  
// print.call(person,"Hello")

//.................................Self invoking Function.......

// (function Greet(){
//     console.log("Hello")
// })()

//...........................Arrow Function..........


// const add  = (a,b)=>{
//     return a+b;
// }

// console.log(add(3,4))

//.............................OR....................

// const add  = (a,b)=>a+b;

// console.log(add(2,3))

//...................................................

// setInterval(()=>console.log("hello"),1000)
//.........Print hello after any 1 sec..............

//....................................THIS......and.....Bind.............

// fruit = "apple"

// const user = {
//     name : "veer",
//     work : "cse",
//     state : "haryana",

//     test : function(){
//         console.log(this.name)
//         console.log(this)
//     }
    
// }

// user.test()

// const admin = {
//     name : "one",
//     state : "pun"
// }
// const newtest = user.test.bind(admin);

// newtest()

//....................................Practice..............

// function printname() {
//     console.log(this)
// }

// const printage = ()=>{
//     console.log(this)
// }

// printname.call({name:"veer"})
// printage.call({age:"19"})

//...............................Strict mode.........................
// do not accept unwanted bindings...........................
//.................but arrow function ignore the strict mode.........


// "use strict";

// function printname() {
//     console.log(this)
// }

// const printage = ()=>{
//     console.log(this)
// }

// printname()
// printage()


//.............................self pattern...................................

// function myfun(){

//     let self = this;

//     setTimeout(function(){
//         console.log(self)
//     },1000);
// }

// myfun.call({name:"veer"})

//................................CallBack Function.............

// function multy(num,CallBack){
//     let result = num*2
//     CallBack(result)
// }

// multy(5,function(data){console.log(data)})

//..................................................

// function multy(arr,CallBack){
//     for (num of arr){
//        let  result = num *2
//        CallBack(result)
//     }
// }
// arr=[1,2,3]

// multy(arr,(data)=>{console.log(data)})

//...................................................

// function multy(arr,CallBack){
//     for (num of arr){
//         CallBack(num)
//     }
// }
// arr=[1,2,3]

// multy(arr,(num)=>{
    
//     let  result = num *2;
//     console.log(result)})
//.....................................................

// function multy(arr,CallBack){
//     for (name of arr){
//         CallBack(name)
//     }
// }
// arr=["veer","rahul","harry"]

// multy(arr,(str)=>{
    
//     let  result = str.toUpperCase();
//     console.log(result)})

//.................................Higher Order Function..............

// function multiply(factor){
//     return function(number){
//         return factor*number
//     }
// }

// const multiplyByTwo = multiply(2)
// console.log(multiplyByTwo(4))

//..............................................