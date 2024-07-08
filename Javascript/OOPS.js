//Prototypes...............................

// let obj = {
//     name:"veer",
//     age:20
// }

// let obj2 = {
//     class:"sc",
//     Work:"eng"
// }

// obj.__proto__ = obj2

// console.log(obj.class);



//Classes and Objects......................................................

// class AddmissionForm{
//     submit(){
//         console.log(`${this.name} Your form is Submitted with formNumber ${this.formNumber}`);
//     }
//     cancle(){
//         console.log(`${this.name} Your form is canceled with formNumber ${this.formNumber}`);
//     }
//     Info(name,formNumber){
//         this.name=name;
//         this.formNumber=formNumber
//     }
// }

// let veer = new AddmissionForm();
// veer.Info("Veer",124)
// let raj = new AddmissionForm();
// raj.Info("Raj",155)

// veer.submit();
// raj.submit();
// veer.cancle()


//Constructor...............................................................

// class AddmissionForm{
//     constructor(name,formNumber){
//         this.name=name;
//         this.formNumber=formNumber
//     }
//     submit(){
//         console.log(`${this.name} Your form is Submitted with formNumber ${this.formNumber}`);
//     }
//     cancle(){
//         console.log(`${this.name} Your form is canceled with formNumber ${this.formNumber}`);
//     }
// }

// let veer = new AddmissionForm("Veer",124);
// let raj = new AddmissionForm("Raj",155);

// veer.submit();
// raj.submit();
// veer.cancle()


//Inheritance..............................................................

// class Animal{
//     constructor(name,color){
//         this.name=name;
//         this.color=color;
//     }

//     eat(){
//         console.log(`${this.name} can eat`);
//     }

//     colorOf(){
//         console.log(` the color of ${this.name} is ${this.color} `);
//     }
// }

// let animal1 = new Animal("Dog","black");
// animal1.eat()
// animal1.colorOf()
// //animal1.eatBanana() //this will throw error

// class Monkey extends Animal{
//     eatBanana(){
//         console.log(`${this.name} can eat banana`);
//     }
// }

// let monkey1 = new Monkey("chintu","brown")
// monkey1.eatBanana()
// monkey1.colorOf()


//Super keyword.......................................................
//Super keyword is use to override and use the methods of parent class


// class Employee{

//     leaves(n){
//         console.log(`employee request ${n} leaves`);
//     }
// }


// class Programmer extends Employee{
//     leaves(n){
//         super.leaves(n)
//         console.log(`One extra leave added for programmer`);
//         console.log(`Now you have ${n+1} leaves`);
//     }

// }

// let p1 = new Programmer()
// p1.leaves(4)



//Static methods.............................................................

// class Student{
//     constructor(name){
//         this.name = Student.capitalize(name);
//     }

//     reading(){
//         console.log(`${this.name} is reading book`);
//     }

//     static capitalize(name){
//         return name.charAt(0).toUpperCase() + name.substr(1,name.length)
//     }

// }

// let s1 = new Student("ram")
// s1.reading()

// let s2 = new Student(Student.capitalize("veer"))
// s2.reading()

// console.log(Student.capitalize("ajay"));

//..............................................

// class myMath{
//      static sqr(x){
//         return x*x;
//     }
// }

// const sqrOf4 = myMath.sqr(4);
// console.log(sqrOf4);


//Getter and Setters............................................................................


// class Student{
//     constructor(name){
//         this._name=name
//     }

//     get name(){
//         return this._name
//     }

//     set name(newName){
//         this._name=newName
//     }
// }

// let s1 = new Student("Veer")
// console.log(s1._name);
// s1.name = "Raaj"
// console.log(s1._name);

// console.log(s1 instanceof Student);


//Practice.............................................................

// class Complex{
//     constructor(real,img){
//         this.real=real;
//         this.img=img;
//     }

//     add(num){

//         this.real = this.real+num.real;
//         this.img = this.img+num.img;

//     }
// }

// let a = new Complex(2,4)
// let b = new Complex(5,9)

// a.add(b)
// console.log(`${a.real}+${a.img}i`);


