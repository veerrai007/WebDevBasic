// function sandwich(callback){
//     console.log("get some bread");
//     callback();
// }

// function step2 (){
//     console.log("add some chease");
// }

// sandwich(step2);

//.............................................................

// function loadScript(src,callback){

//     var script = document.createElement("script");
//     script.src = src;

//     script.onload = function(){
//         console.log("Script loaded of SRC: " + src);
//         callback(src);
//     }

//     document.body.appendChild(script)
// }

// function hello(src){
//     console.log("Hello " + src);
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello)



//Error Handling using Callbacks...........................................


// function loadScript(src,callback){

//     var script = document.createElement("script");
//     script.src = src;

//     script.onload = function(){
//         console.log("Script loaded of SRC: " + src);
//         callback(null,src);
//     }

//     script.onerror = function(){
//         console.log("error loading with script SRC: "  + src);
//         callback(new Error("Src got some error"))
//     }

//     document.body.appendChild(script)
// }

// function hello( error,src){

//     if(error){
//         console.log(error);
//         return;
//     }
//     console.log("Hello " + src);
// }

// loadScript("ttps://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello)


//Promises...............................................


// let p1 = new Promise((resolve,reject)=>{
    
//     console.log("promise is pending")
//     setTimeout(()=>{
//         console.log("promice is fullfilled");
//         resolve(true)
//     },3000)
// })
// console.log(p1);


// let p2 = new Promise((resolve,reject)=>{
    
//     console.log("promise is pending")
//     setTimeout(()=>{
//         console.log("promice is rejected");
//         reject(new Error("an error found"))
//     },3000)
// })
// console.log(p2);


//.then and .catch.......................


// let p1 = new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         console.log("promice is fullfilled");
//         resolve(true);
//         // reject(1)
//     },1000)
// })

// p1.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// })

//...................

// let p2 = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         console.log("promice is rejected");
//         reject(new Error("an error found"))
//     },3000)
// })

// p2.catch((error)=>{
//     console.log("some error occured in p2");
// })

//....................

// let promise  = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Done Hai");
//         resolve("Done"),2000}
//     )
// })

// promise.then(alert)

//Promise chaining.........................................................................

// let loadScript = function(src){
//     return new Promise((resolve,reject)=>{
//         var script = document.createElement("script");
//         script.src = src;
//         document.body.appendChild(script)

//         script.onload = ()=>{
//             resolve ("Script loaded") 
//         }

//         script.onerror = ()=>{
//         reject ("An error occured in loading scrtipt")
//         }

//     })
// }

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")

// p1.then((value)=>{
//     console.log(value);
    // return loadScript("ttps://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// }).then((value)=>{
//     console.log("second script ready");
// }).catch((value)=>{
//     console.log(value);
// })


//Promise API...............................................

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("1")
//     },1000)
// })

// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(Error)
//     },2000)
// })

// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("3")
//     },3000)
// })


// let all_promise = Promise.all([p1,p2,p3]);  //if any error then throw error
// let all_promise = Promise.allSettled([p1,p2,p3]);  //don't throw error
// let all_promise = Promise.race([p1,p2,p3]);  //throw error if first promise rejected
// let all_promise = Promise.any([p1,p2,p3]);   //wait for first promice to resolve
// let all_promise = Promise.resolve(6);
// let all_promise = Promise.reject(new Error ("Hay"));

// all_promise.then((value)=>{
//     console.log(value);
// })


//Async Await....................................................

// async function weather(){
//     let delhiWeather = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("25 deg")
//         }, 2000);
//     });

//     let goaWeather = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("28 deg")
//         }, 5000);
//     });

//     // delhiWeather.then(alert);
//     // goaWeather.then(alert);
//     console.log("Fetching Delhi weather...");
//     let delhiW = await delhiWeather;
//     console.log("Fetched Delhi weather is "+delhiW);
//     console.log("Fetching Goa weather...");
//     let goaW = await goaWeather;
//     console.log("Fetched Goa weather is "+goaW);
//     return [delhiW, goaW];
// }

// // weather();

// let a = weather();
// a.then((value)=>{
//     console.log(value);
// })



// Try Catch..............................................

// setTimeout(()=>{
//     console.log("One");
// },1000)
  
// setTimeout(()=>{
//     try{
//         console.log(Two);
//     }
//     catch (error) {
//         console.log("Error Found");
//     }
// },2000)
    
// setTimeout(()=>{
//     console.log("Three");
// },3000)


//Error Object and custom error...................................

// try{
//     // Sunny
//     // throw new Error("Hi")
//     // throw new ReferenceError("Hello")
// }
// catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }



// try {
//     let age = prompt("Enter your age")
//     age = Number.parseInt(age)
//     if(age>150){
//         throw new ReferenceError("Age is probably not true")
//     }
//     console.log("Your age is: "+age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }




//Finally Clause..................................
//It runs in all cases............................

// try {
//     console.log(Hii);
    
// } catch (error) {
//     console.log(error);
    
// }finally{
//     console.log("I'm still running");
// }



//................................................

// const loadscript = async (src)=>{
//         return new Promise((resolve, reject)=> {

//         let script = document.createElement("script");
//         script.scr = src;
//         script.onload = ()=>{
//             resolve(src)
//         }
//         document.head.appendChild(script)
//     })
// }

// const main1 = async ()=>{
//     let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
// }

// main1()

//................................................

// const a = async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(new Error("This is an error"))
//         },2000)
//     })
// }

// const main2 = async ()=>{
//     try {
//         let b = await a();
//         console.log(a);
        
//     } catch (error) {
//         console.log("an errro occure");
        
//     }
// }

// main2()

//.................................................

// let a1 = async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(10)
//         }, 1000);
//     })
// }
// let a2 = async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(20)
//         }, 2000);
//     })
// }
// let a3 = async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(30)
//         }, 3000);
//     })
// }

// let run = async()=>{

//     console.time("run");
//     let p1 = await a1()
//     let p2 = await a2()
//     let p3 = await a3()
//     console.log(p1,p2,p3);
//     console.timeEnd("run")
// }
// run()

    //To parallely run we can use this....


// let run = async()=>{

//     console.time("run");
//     let p1 = a1()
//     let p2 = a2()
//     let p3 = a3()

//     let p1p2p3 = await Promise.all([p1,p2,p3])
//     console.log(p1p2p3);
//     console.timeEnd("run")
// }
// run()



//Practise...................................
//resolve callback hell using promises

// const a = function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data feched")
//         },1000)
//     })
// }
// const b = function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data feched 2")
//         },1000)
//     })
// }
// const c = function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data feched 3")
//         },1000)
//     })
// }

// a().then((value)=>{
//     console.log(value);
//     return b();
// }).then((value)=>{
//     console.log(value);
//     return c();
// }).then((value)=>{
//     console.log(value);
// })



//Using async await...............................


// const a = async function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data feched 1")
//         },1000)
//     })
// }
// const b = async function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data feched 2")
//         },1000)
//     })
// }
// const c = async function(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data feched 3")
//         },1000)
//     })
// }

// async function main1(){
//     const p1 = await a();
//     console.log(p1);
//     const p2 = await b();
//     console.log(p2);
//     const p3 = await c();
//     console.log(p3);
// }

// main1();


//Async await...........................................................

// const sandwich = async function(){

//     const p1 = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Get some bread");
//             resolve()
//         }, 2000);
//     })
//     await p1;
//     const p2 = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Add some cheace");
//             resolve()
//         }, 3000);
//     })
//     await p2;
//     const p3 = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("eat the bread");
//             resolve()           
//         }, 1000);
//     })
    
// }
// sandwich()



//.........................................

// async function step1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Get some bread")
//         },1000)
//     })
// }
// async function step2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("add some chease")
//         },2000)
//     })
// }
// async function step3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("add some butter")
//         },1000)
//     })
// }

// async function main1(){
//     try {
        
//         const s1 = await step1();
//         console.log(s1);
//         const s2 = await step2();
//         console.log(s2);
//         const s3 = await step3();
//         console.log(s3);
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// main1()

//........................Practice.............................


// async function veer(){
//     return 2
// }

// let p  = veer()

// p.then((a)=>{
//     console.log(a);
// })




// async function weather(){

//     let delhiWeather = new Promise ((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("25 deg")
//         }, 2000);
//     })

//     let goaWeather = new Promise ((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("49 deg")
//         }, 5000);
//     })

//     console.log("Fetching Delhi weather...");
//     let delhi = await delhiWeather
//     console.log(delhi);
//     setTimeout(() => {
//         console.log("Fetching Goa weather...");
//     }, 1000);
//     let goa = await goaWeather
//     console.log(goa);

//     return[delhi,goa]
// }

// weather().then((value)=>{
//     console.log(value);
// })



//Try catch and custom error throw.........................

// try {
//     let age = prompt("Enter your age")
//     age = Number.parseInt(age)
//     if(age>150){
//         throw new Error ("This is probably not true")
//     }
//     else{
//         console.log(age);
//     }
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

//..........................................................................

// let f1 = async ()=>{

//     let p1 = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Done 1");
//             resolve(true)   
//         }, 2000);
//     })
// }
// let f2 = async ()=>{

//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Done 2");
//             resolve(true)  
//         }, 2000);
//     })
// }

// (async()=>{
//     let a = await f1()
//     let b = await f2()
//     return(a,b)

// })()

