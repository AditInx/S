let stop = document.getElementById('stop');
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let hours = document.getElementById('hours');
let mins = document.getElementById('mins');
let sec = document.getElementById('sec');

start.addEventListener('click',setInterval(() => {
    start.innerHTML = start.innerHTML + 1000;
}, 1000));