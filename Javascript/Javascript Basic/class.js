// class User {

//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }

//     fullname(){
//         console.log(this.firstname +" "+ this.lastname);
//     }
// }

// const user1 = new User("Veer","Singh");
// user1.fullname();



//Private mambers in class.................................

// const User = class{

//     #count = 0;     //also a private member

//     constructor(){
//         let number = 1;
        
//     this.getnumber = ()=>{
//             return number;
//         }
//     }

//     getcount(){
//         return this.#count
//     }


//     print(){
//         console.log(this.number);
//     }
// }

// const user1 = new User();
// user1.print();
// console.log(user1.getnumber());
// console.log(user1.getcount());


//Method chaining....................

// class Calc {

//     value;

//     take(val){
//         this.value=val;
//         return this;
//     }

//     add(num){
//         this.value+=num;
//         return this
//     }

// }

// const cal = new Calc();
// console.log(cal.take(5).add(5).value);



