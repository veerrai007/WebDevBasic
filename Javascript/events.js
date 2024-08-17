let a = document.getElementById('first');

a.onclick=function(){
    console.log("click hua");
    document.body.style.backgroundColor="blue";
}

let b = document.getElementById('second');

b.onmouseover= ()=>{
    alert("Don't touch Me");
}



//EventListener..........................................

// let a = document.getElementById('first');

// let x = ()=>{
//     alert("One")
// }

// let y = ()=>{
//     alert("Two")
// }

// a.addEventListener('click',x);
// a.addEventListener('click',y);

// const n = prompt("favorite number?");

// if(n=="2"){
//     a.removeEventListener('click',x);
// }
// if(n=="1"){
//     a.removeEventListener('click',y)
// }




// let a = document.getElementById('first');

// let x = function(e){
//     console.log(e);
//     console.log(e.currentTarget);
//     console.log(e.type, e.clientX, e.clientY, outerWidth);
// }

// a.addEventListener('click',x)






// youtube = document.getElementById('youtube')

// youtube.onclick=function() {

//     window.location = "https://www.youtube.com"
    
// }

