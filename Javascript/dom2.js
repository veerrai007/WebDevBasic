let cardt = document.getElementsByClassName("card-title")[0]
cardt.style.color="red";

let bttn = document.querySelectorAll(".btn");
bttn[0].style.background="yellow";
bttn[1].style.background="green";
bttn[2].style.background="blue";

document.querySelector(".card-text").style.color="red";

document.body.getElementsByTagName("h5")[1].style.color="green";
document.body.getElementsByTagName("h5")[2].style.color="green";

let t = document.body.querySelector(".card").getElementsByTagName("a")[0];
t.style.color="red";


//................................matchces,closest,contains...............

let title = document.getElementById("title")
console.log(title.matches(".card-body"));
console.log(title.matches(".card-title"));


console.log(title.closest(".card-title"));


let card1 = document.getElementById("card1");
console.log(card1.contains(text))



