document.addEventListener("DOMContentLoaded", function(){

//Timer
const timerSpan = document.querySelector("#timer")

function countTime(){
const matrixRelease = new Date(1999,3,31,11,59,59);
let today = new Date();
let panthaRei = new Date(Math.abs(today.getTime() - matrixRelease.getTime()));

let time = `${panthaRei.getFullYear() - 1970} years 
            ${panthaRei.getMonth()} months 
            ${panthaRei.getDate()} days 
            ${panthaRei.getHours()} hours 
            ${panthaRei.getMinutes()} minutes 
            ${panthaRei.getSeconds()} seconds ago`;

timerSpan.innerHTML = time;
}

setInterval(function(){
  countTime()
}, 1000)


//Matrix background 
const canvas = document.querySelector('#bckgrd');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let numbers = '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
numbers = numbers.split('');

const numberSize = 18;
const columnsQty = canvas.width / numberSize;

// i = x-coordinate the same for every drop initially)
let drops = [];
for (let i = 0; i < columnsQty; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function rain() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(127, 255, 0, 1)';

  for (let i = 0; i < drops.length; i++) {
    let no = numbers[Math.floor(Math.random() * numbers.length)];
    //x = i*numberSize, y = value of drops[i]*numberSize
    ctx.fillText(no, i * numberSize, drops[i] * numberSize);
    drops[i]++; //y-coord incrementation
    if (drops[i] * numberSize > canvas.height && 
        Math.random() > .975) {
      drops[i] = 0;
    }
  }
}

setInterval(rain, 36);

//DOM    
})
