let up = document.getElementById("up")
let down = document.getElementById("down")
let on = document.getElementById("on-btn");
let off = document.getElementById("off-btn");
let slow = document.getElementById("slow-btn");
let medium = document.getElementById("medium-btn");
let fast = document.getElementById("fast-btn");
let fan = document.getElementById("fan");
let hot = document.getElementById("hot");
let cold = document.getElementById("cold");

on.onclick=function(){
    up.classList.add('on')
    down.classList.add('on')
}
off.onclick=function(){
    up.classList.remove('on' ,'slow','medium', 'fast')
    down.classList.remove('on', 'slow','medium', 'fast')  
    fan.classList.remove('hot','cold')  
}
slow.onclick=function(){
    if (up.getAttribute("class").includes("on")) { 
        up.classList.remove('medium', 'fast')
        down.classList.remove('medium', 'fast') 
        up.classList.add('slow')
        down.classList.add('slow')   
    }
    else{
        alert("Please,Switch on your fan")
    }
}
medium.onclick=function(){
    if (up.getAttribute("class").includes("on")) { 
        up.classList.remove('slow', 'fast')
        down.classList.remove('slow', 'fast') 
        up.classList.add('medium')
        down.classList.add('medium')  
    }
    else{
        alert("Please,Switch on your fan")
    } 
}
fast.onclick=function(){
    if (up.getAttribute("class").includes("on")) { 
        up.classList.remove('medium', 'slow')
        down.classList.remove('medium', 'slow') 
        up.classList.add('fast')
        down.classList.add('fast')   
    }
    else{
        alert("Please,Switch on your fan")
    } 
}

hot.onclick=function(){
        fan.classList.remove('cold')
        fan.classList.add('hot')
}
cold.onclick=function(){
        fan.classList.remove('hot')
        fan.classList.add('cold')
}




