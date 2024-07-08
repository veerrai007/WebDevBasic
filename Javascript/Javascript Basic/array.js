//.............................................................Arrays............are muteble...................

// let marks = [23,35,48,50,67,'veer']

// console.log(marks)
// console.log(marks.length)
// console.log(marks[4])
// marks[6]=555
// console.log(marks[6])
// console.log(marks.length)
// marks[2]="rai"
// console.log(marks)



//......................................print array using for loop..............

// let marks = [23,35,48,50,67,'veer']

// len=marks.length

// for(i=0;i<len;i++){
    //     console.log(marks[i])
    // }
    
    
//........................................Array Methods..........................

// let marks = [23,35,48,50,67,'veer']

// let a = marks.toString()                                   //...............................convert array to string
// console.log(a)
// console.log(typeof(a))

// let b =  marks.join("-")
// console.log(b)

// marks.pop()
// console.log(marks)

// let i = marks.pop()                                        //..............return popped elemant.................
// console.log(marks,i)

// marks.push(1000)
// console.log(marks)

// let r = marks.shift()                                      //............remove element from starting.............
// console.log(r)
// console.log(marks)

// marks.unshift(2000)                                        //..............add element in starting................
// console.log(marks)

// delete marks[0]                                            //....................does not effect lenght of array.................
// console.log(marks)

// let marks_more = [31,53,75,98,83]

// let new_array = marks.concat(marks_more)                   //.......................Concat array..................
// console.log(new_array)

//......................................Sort Methode.............................

// let marks1 =  [43,75,89,73,63,700,455]

// let compare = (a,b)=>{
//     return a-b
// }

// marks1.sort(compare)
// console.log(marks1)

//.............................Splice.....................

// let marks2 =  [43,75,89,73,63,700,455]
// let deleted_elements = marks2.splice(1,3,100,101,102)       //......................return deleted items...................... 
// console.log(marks2)
// console.log(deleted_elements)

//..........................Slice..................

// let num =  [3,5,89,73,63,700,455]

// let new_num = num.slice(2,6)
// console.log(new_num)

//......................................................For Each Loop..................................


// num.forEach(element => {
//     console.log(element*element) 
// });

//.........................................Array.From method.....to change any other object or Html colletion in array.

// let name = "veersingh"

// let rr = Array.from(name)
// console.log(rr)

//...........................................For of loop...................print items........

// for (let i of num){
//     console.log(i)
// }

//....................................for in loop...............print keys.....

// for ( let n in num){
//     console.log(n)
// }




//........................................................Map, Filter, Reduce..........................................

//...............Map......................returns a new array................

// let num = [24,65,86,94,27,41,55,234]

// let n = num.map((value,index,array)=>{

//     console.log(value,index,array)
//     return value+index
    
// })
// console.log(n)

// console.log(num)

//............Filter.....................

// let num = [24,65,86,94,27,41,55,235]

// let f = num.filter((i)=>{
//     return i%5==0
// })

// console.log(f)

//..............reduce...................

// let num = [24,65,86,94,27,41,55,234]

// let r = num.reduce((a1,a2)=>{
//     return a1+a2
// })

// console.log(r)


//..........................................................Practice.................................



// let arr = [[1,2,3],[4,5,6,],[7,8,9,]]
// console.log(arr.flat())
// console.log(arr.at(2)[1])
// console.log(arr[1][1])
// console.log(...arr.at(0))
// console.log(...arr.at(0),...arr.at(1),...arr.at(2))
// console.log([...arr.at(0),...arr.at(1),...arr.at(2)])
// console.log(String(arr))

// let item = ["apple","banana","mango"]
// console.log(item.indexOf("apple"))
// console.log(item.includes("mango"))




// let obj  = {
//     'name':"veer",
//     'class':"cs",
//     'roll':5,
//     'arr':[1,2,3,4]
// }


// obj.name="ram"
// console.log(obj )

// for(let i in obj){
//     console.log(obj[i])
// }

// console.log(Object.keys(obj))
// console.log(Object.keys(obj).length)


// for(i=0;i<Object.keys(obj).length;i++){
//     console.log(Object.keys(obj)[i]+ " is "+ obj[Object.keys(obj)[i]] )
// }




























