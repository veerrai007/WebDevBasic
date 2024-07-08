// // var a = document.getElementById('myAudio');
// let playBtn = document.getElementById("play")
// let pauseBtn = document.getElementById("pause")
// var audio= new Audio("excuse-me-boss-ringtone-256k-62489.mp3")

// function playAudio(){
//     audio.play()
// }

// function pauseAudio(){
//     audio.pause()
// }

// playBtn.addEventListener('click',playAudio)
// pauseBtn.addEventListener('click',pauseAudio)

//...................................................................................

// var audio= new Audio("excuse-me-boss-ringtone-256k-62489.mp3")

// let sec;

// const playAlarm = ()=>{
//     let sec = prompt("enter seconds to set alarm")
//     setTimeout(()=>{
//         audio.play()
//     },sec*1000)
// }

// let playBtn = document.getElementById("play")
// playBtn.addEventListener('click',playAlarm)

//.....................................................................................




var audio= new Audio("excuse-me-boss-ringtone-256k-62489.mp3")


const playAlarm = ()=>{
    let d = new Date();

    let min = prompt("enter seconds to set alarm")
    while (parseInt(min)==d.getMinutes()) {
        
        audio.play()
    }
}

let playBtn = document.getElementById("play")
playBtn.addEventListener('click',playAlarm)





setInterval(() => {
    let d = new Date();
    time.innerHTML=d.toDateString()+" "+d.toTimeString();
}, 1000);




