// const user = {}

// const option = {}

// const myProxy = new Proxy(user,option);

// user.name = "Veer";
// console.log(myProxy.name);
// myProxy.age = 15;
// console.log(user.age);



// let user = {
//     _password : "secret",
//     name:"Raju"
// }

// const option = {
//     get(target,prop){
//         if(prop.startsWith("_")){
//             return console.error("Can't Access the password")
//         }
//         return target[prop]
//     },

//     ownKeys(target){
//         return Object.keys(target).filter(keys=>!keys.startsWith("_"))
//     },

//     set(target,prop,value){
//         if(prop=="name"){
//             return false
//         }
//         target[prop] = value
//         return true
//     },

//     deleteProperty(target,prop){
//         if(prop.startsWith("_")){
//             return "Can't delete"
//         };
//         delete target[prop];
//         return true
//     }


// }

// user = new Proxy(user,option);


// user.name = "Veer";
// console.log(user.name);
// user.sallary = 50000;
// console.log(user.sallary);
// user.age = 20
// console.log(user.age);
// console.log(user);
// console.log(Object.keys(user));
// console.log(user._password);




// let obj = {}

// Object.defineProperty(obj,"age",{
//     value:18,
//     configurable:true
// })
// if(Reflect.deleteProperty(obj,"age")){
//     console.log("Deleted");
// }

// console.log(obj.age);

// console.log(Reflect.has(obj,"age"));

