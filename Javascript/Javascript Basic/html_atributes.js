// a = document.getElementById('caption');
// console.log(a.hasAttribute('class'));
// console.log(a.hasAttribute('id'));

// a.setAttribute("class","first");
// console.log(a.hasAttribute('class'));

// a.removeAttribute("id");
// console.log(a.hasAttribute('id'));

// console.log(a.dataset);



//insertion in HTML using jS...........................

a=document.getElementsByTagName('div')[0];

let div = document.createElement('div');
div.innerHTML='<h1>Hwloooo</h1>';

// a.appendChild(div);
// a.prepend(div);
// a.after(div);
// a.before(div)
// a.replaceWith(div)

// a.insertAdjacentHTML('beforebegin','<h3>beforebegin</h3>')
// a.insertAdjacentHTML('afterbegin','<h3>afterbegin</h3>')
// a.insertAdjacentHTML('beforeend','<h3>beforeend</h3>')
// a.insertAdjacentHTML('afterend','<h3>afterend</h3>')

// a.remove()


// HTML Classes using JS.................................

// a = document.getElementById('caption');
// a.className='red black'
// a.className='blue'
// a.classList.add('size')
// a.classList.remove('red')
// a.classList.toggle('blue')




//bulb...............
// b=document.getElementById('btn')
// a = document.getElementById('bulb');

// b.onclick=function(){
    //     a.classList.toggle('bulbC')
    
    // }
   
    



    
a = document.getElementById('bulb');
setInterval(() => {
    a.classList.toggle('bulbC')

}, 500);


