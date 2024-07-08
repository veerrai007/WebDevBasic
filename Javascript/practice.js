// let url  = "https://isro.vercel.app/api/spacecrafts"
// let response = fetch(url)
// response.then((craftsList)=>{
//     return craftsList.json()
// }).then((craftsList)=>{
//     let ihtml = "";
//     let craft = craftsList.spacecrafts;
//     for(item in craft){
//         console.log(craft[item]);
//         ihtml+=`
//         <div class="card" style="width: 15rem;">
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" class="card-img-top" alt="...">
//         <div class="card-body">
//         <h5 class="card-title">Sapcecraft ID :${craft[item].id}</h5>
//         <p id="card-text" class="card-text">Sapcecraft Name :${craft[item].name}</p>
//         <a href="#" class="btn btn-primary">More Info</a>
//         </div>
//         </div>`
//     }
//     a=document.getElementById("card-container");
//     a.innerHTML=ihtml;
    
// })


//..........................................................................................

// let obj = {
//     array:[
//         {id:1,name:"a"},
//         {id:2,name:"b"},
//         {id:3,name:"c"},
//         {id:4,name:"d"},
//         {id:5,name:"e"}
//     ]
// }


// let arr = obj.array;
// console.log(arr);

// for(item in arr){
//     console.log(arr[item]);
//     console.log(arr[item].id);
//     console.log(arr[item].name);
// }

//     let ihtml = "";
//     let arr = obj.array;

//     for(item in arr){
//         console.log(arr[item].id);
//         ihtml+=`
//         <div class="card" style="width: 18rem;">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">Sapcecraft ID :${arr[item].id}</h5>
//           <p class="card-text">Sapcecraft Name :${arr[item].name}</p>
//           <a href="#" class="btn btn-primary">More Info</a>
//         </div>
//         </div>`
//     }
// a=document.getElementById("card-container");

// a.innerHTML=ihtml;



//................................................................................

//local storage practice with eventlistner


// let w = function(){
//     let a = prompt("enter your note")
//     if(a){
//         localStorage.setItem("Note",a)
//     }
// }

// let r = function note(){
//    let n =  localStorage.getItem("Note")
//     alert("Your note is "+n)
// }


// let d = function(){
//     let c = confirm("Do you really want to delete note?")
//     if(c){
//         localStorage.removeItem("Note")
//     }
// }

// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");
// btn1.addEventListener('click',r)
// btn2.addEventListener('click',w)
// btn3.addEventListener('click',d)



//..............................................................

// let msg = [
//     "finding account.......",
//     "account founded.......",
//     "username-veer.......",
//     "varifing account.......",
//     "trying to access.......",
//     "cracking password.......",
//     "300+ passwords try.......",
//     "trying more passwords........",
//     "200+ anothe passwords tring.....",
//     "password found..........",
//     "getting access.....",
//     "account Hacked..........!"
// ]

// let sleep = async function(seconds){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(true)
//         }, seconds*1000);
//     })
// }

// const showhack = async(massage)=>{
//     await sleep(2);
//     // console.log(massage);
//     text.innerHTML=text.innerHTML+massage + "<br>"
// }

// (async()=>{
//     for(let i=0;i<msg.length;i++){
//     await  showhack(msg[i])
//     }
// })()


//.........................................................................

// const fun = async(value,n=2)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(value)
//         }, 1000*n);
//     })
// }

// (async()=>{

//     let p1 = await fun("Hello",5);
//     console.log(p1);
//     let p2 = await fun("World",3);
//     console.log(p2);
// })()


//........................................................................

