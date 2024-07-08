//sum of n natural numbers using for loop.....................................

// n=prompt("enter the value of n");
// n=Number.parseInt(n)
// sum=0
// for(let i=0; i<n+1; i++)
// {
//     sum+=i
// }
// console.log("sum of first " + n + " natural numbers is " + sum);

//print marks using for loop...................

// let marks={
//     ravi:10,
//     veer:80,
//     rahul:50,
//     arun:70,
// }

// for(i=0 ; i<Object.keys(marks).length ; i++ ){
//     console.log("marks 0f " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
// }

//or we can use For IN LOOP

//for In loop...................................

// let marks={
//     ravi:10,
//     veer:80,
//     rahul:50,
//     arun:70,
// }
// for(let i in marks){
//     console.log(" marks of " + i + " is " + marks[i] )
// }

//for Of loop...................................

// for (let a of "welcome"){
//     console.log(a)
// }


//while Loop.........................

// n=prompt("enter the number")
// n=Number.parseInt(n)
// let i = 0
// while(i<n){
//     console.log(i+1);
//     i++;
// }

//...................................

// n=99
// let i;
// while(i!=n){
//     i=prompt("enter the number")
//     i=Number.parseInt(i)
// }
// console.log("correct")

//DO while loop............................

// let i=0
// let n=100

// do{
//     console.log(i)
//     i++
// }

// while(i<n)




// FUNCTIONS---------------------------------------------------FUNCTIONS

// function add(a,b){
//     return a+b;
// }

// a=prompt("enter the number a")
// a=Number.parseInt(a)
// b=prompt("enter the number b")
// b=Number.parseInt(b)

// console.log(add(a,b))

//........................................................//

// function hello(){
//     console.log("hello , how are you?");
//     return "hii";
// }

// hello();


//.......................................................OTHER SYNTAX OF FUNCTION is Arow Function.

// const sum = (x,y)=>{
//     return x+y
// }
// x=5
// y=6
// console.log(sum(x,y))

//......................................

// const hello=()=>{
//     return "hii"
// }

// let a=hello()
// console.log(a)

//.....................................................................mean of four numbers using function.

// const mean=(a,b,c,d)=>{
//     return (a+b+c+d)/4
// }

// a=1
// b=2
// c=3
// d=4

// console.log("Mean = ",mean(a,b,c,d))

//........................................................Strings.............

// let name="veer"

// console.log(name.length)
// console.log(name[3])

// let fruit='banana\'price'
// let fruit='banana\nprice'
// let fruit='banana\tprice'
// let fruit='banana\rprice'

// console.log(fruit)

//.....................................template litrels................

// let boy1='ajay'
// let boy2="raj"

// let sentance=`${boy1} is friend of ${boy2}`
// console.log(sentance)

//.................................................string methods...................................

// let name="veersingh"

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(1,8))
// console.log(name.replace("singh","rai"))

// let friend="ajay"
// console.log(name.concat(" is friend of " , friend , " done"))

// let friend2="           raj           ";
// console.log(friend2)
// console.log(friend2.trim())

// for(i=0; i<name.length; i++){
//     console.log(name[i])
// }

//.................................................................................

// let sentance = "my name is veer"
// let word = "rai"
// console.log(`the word ${word} ${sentance.includes(word) ? 'is':'is not'} in the sentence.`)



// console.log(sentance.includes("veer"))
// console.log(sentance.startsWith("veer"))
// console.log(sentance.endsWith("veer"))




