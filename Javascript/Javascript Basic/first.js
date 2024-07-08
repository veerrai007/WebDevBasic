let a = 10
console.log(a)
console.log(typeof a)
a="veer"
console.log(a)
console.log(typeof a)

// primitive data types in js

// Null number bool bigint string Symbol undefined

let x = null
let y = 55
let z = true
let w = BigInt("567")
let u = "String"
let v = Symbol("heart symbol")
let j = undefined

console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(typeof w)
console.log(typeof u)
console.log(typeof v)
console.log(typeof j)



// ( non-primitive data type) Objects in JS

let item = {
    "name":"ravi",
    "age":20,
    "class":true
}

// add a new key in Object
item["num"]=2

console.log(item["name"])
console.log(item)

// dictionary using Object

const dict = {
    fruits:"apple,banana,grapes",
    colours:"red,green,blue" 
}

console.log(dict['fruits'])

// or we can use this syntax 

console.log(dict.colours)

// arithmetic operators

a=2
b=4
c=5

console.log(a**b) //exponantiation
console.log(++a) //increment and then print
console.log(b++) //print after that increment
console.log(b)
console.log(c--)//decrement
console.log(c)

// assignment operators

m=3
n=4

n+=2
console.log(n)

m**=2;
console.log(m)

// comparison operators

j=5
k="5"
l=6

console.log(j==k)  //equal to
console.log(j===k)  // equal value and type
console.log(j!==k)  // not equal value and type

// logical operators

console.log(j==k && j<l) // in AND operator if both conditions true only then return true othervise false
console.log(j==l || j!=k ) // in OR operator if both conditions false only then return false othervise true
console.log(!true) // return oposite boolen value






