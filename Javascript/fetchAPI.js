// let p = fetch("https://goweather.herokuapp.com/weather/haryana")

// p.then((response)=>{
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json()
// }).then((response)=>{
//         console.log(response);
//     })
    

//Sending Post requests.........................................

    
// let options = {
//     method :'POST',
//     body: JSON.stringify({
//         Name:"Veer",
//         Surname:"Singh",
//     }),
//      headers:{
//         'Content-type':'application/json'
//     },
// };
    
// let p  = fetch('https://jsonplaceholder.typicode.com/posts',options)
// p.then((response)=>{
//     return response.json();
// }).then((response)=>{
//     console.log(response);
// })
  
    



// const CreatToDo = async()=>{
//     let options = {
//         method :'POST',
//         body: JSON.stringify({
//             Name:"Veer",
//             Surname:"Singh",
//         }),
//         headers:{
//         'Content-type':'application/json'
//         },
//     };

//     let p = await fetch('https://jsonplaceholder.typicode.com/posts',options);
//     let response = await p.json();
//     return response;
// }


// const mainFun = async ()=>{
//     let res = await CreatToDo();
//     console.log(res);
// }

// mainFun();


//Cookies.........................................................

// let key = prompt("Enter key");
// let Value = prompt("Enter value");
// document.cookie = `${key}=${Value}`;
// console.log(document.cookie);

//Encode special characters...........

// let key1 = prompt("Enter key");
// let Value1 = prompt("Enter value");
// document.cookie = `${encodeURIComponent(key1)}=${encodeURIComponent(Value1)}`;
// console.log(document.cookie);



//Local Storage....................................................

// let key = prompt("Enter key");
// let Value = prompt("Enter value");

// localStorage.setItem(key,Value);

// console.log(`The value of ${key} is ${localStorage.getItem(key)}`);



//