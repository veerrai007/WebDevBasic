// let arr  = [2,4,7,8,5,3]
// let [a,b,c] = arr;
// console.log(a,b,c);


// let arr  = [2,4,7,8,5,3]
// let [a,b,c,...rest] = arr;
// console.log(a,b,c,rest);


// let arr  = [2,4,7,8,5,3]
// let [a, , ,...rest] = arr;
// console.log(a,rest);


// let{a,b}={a:1,b:3};
// console.log(a,b);

//Spread operator.................

// let arr = [2,4,3];
// let obj = {...arr}
// console.log(obj);


// const sum = (a,b,c)=>{
//     return a+b+c
// }
// console.log(sum(...arr));



// obj = {
//     name:"Veer",
//     age:20,
//     pass:"abc"
// }

// console.log({...obj,name:"ram"});


//Hoisting......................................................

// console.log(a);
// var a;
// let a; //Not accepted



// f1()
// function f1(){
//     console.log("Hello");
// }



//Closures.......................................................

// var name = "khali"
// let f2 = function(){
//     let name = "veer"
//     function inner(){
//         console.log(name);
//     }
//     name="raj"
//     return inner()
// }
// f2()


