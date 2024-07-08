const test = {
    name:"veer",
    score:88,
    subject:"english"
}

console.log(Object.keys(test));
console.log(Object.values(test));


Object.defineProperty(test,"name",{
    value : "veer",
    writable:false,
    enumerable:false,
    configurable:false
});

test.name = "john";

delete Object.test;

console.log(test.name);



Object.keys(test).map((key)=>{

    console.log(key,test[key]);

})