// let city = "haryana"

// let p = fetch(`https://goweather.herokuapp.com/weather/${city}`)

// p.then((response)=>{
//     return response.json()
// }).then((response)=>{
//         console.log(response);
//         let temp = response.temperature;
//         let wind = response.wind;
//         ihtml=`        
//         <h2>Temperature : ${temp.substring(1)}</h2>
//         <h2>Wind : ${wind}</h2>
//         <h2>Description : ${response.description}</h2>`

//         container = document.getElementById('container');
//         container.innerHTML=ihtml;
// })


const inputbox = document.querySelector('.search input')
const inputbtn = document.querySelector('.search button')



function getWeather (city){

let p = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=66400c120f2d0b2d820e9a5dd2abb51c`)

p.then((response)=>{
    return response.json()
}).then((response)=>{
    console.log(response);
    document.querySelector('.city').innerHTML="City Name: "+response.name
    document.querySelector('.temp').innerHTML="Temperature: "+response.main.temp+" °C"
    document.querySelector('.humidity').innerHTML="Humidity: "+response.main.humidity+"%"
    document.querySelector('.wind').innerHTML="Wind: "+response.wind.speed+" km/h"
})
}

inputbtn.addEventListener('click', ()=>{
    getWeather(inputbox.value)
})