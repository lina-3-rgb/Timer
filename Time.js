let a = 0;

let timeElement;

let txt = document.querySelector('.clic-txt');

let btnStart = document.querySelector('.clic-stop');

let btnPause = document.querySelector('.clic-paus');

let btnReset = document.querySelector('.clic-reboot');

let btnInc = document.querySelector('.clic-increase');

let btnDec = document.querySelector('.clic-decrease');


let start = () => {
    timeElement = setInterval(() => {
        a++;
        txt.value = a;
    }, 1000)
}
function Name(){
    
}

btnStart.addEventListener('click', Name)

btnPause.addEventListener('click', () => {
    clearInterval(timeElement);
})

btnReset.addEventListener('click', () => {
    clearInterval(timeElement);
    a = 0;
    txt.value = a;
})