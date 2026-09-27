let time = 60;                  // время в секундах

let inp = document.querySelector('.clic-txt');
let btnUp = document.querySelector('.clic-increase');
let btnDown = document.querySelector('.clic-decrease');
let btnStop = document.querySelector('.clic-stop');     
let btnReboot = document.querySelector('.clic-reboot'); 
let btnPaus = document.querySelector('.clic-paus');

let timer = null;               // сюда сохраним таймер


function show() {
    let min = Math.floor(time / 60);   
    let sec = time % 60;               

    if (sec < 10) {
        sec = '0' + sec;
    }

    if (min < 10) {
        min = '0' + min;
    }

    inp.value = min + ':' + sec;
}


function start() {
    if (timer !== null) {
        return;                        
    }

    timer = setInterval(function () {
        if (time > 0) {
            time = time - 1;
            show();
        } else {
            clearInterval(timer);
            timer = null;
            inp.value = 'Всё';
        }
    }, 1000);
}


function stop() {
    clearInterval(timer);
    timer = null;
}


btnUp.addEventListener('click', function () {
    time = time + 60;
    show();
});


btnDown.addEventListener('click', function () {
    if (time >= 60) {
        time = time - 60;
    } else {
        time = 0;
    }
    show();
});


btnStop.addEventListener('click', function () {
    stop();
    time = 0;
    show();
});


btnReboot.addEventListener('click', function () {
    stop();
    time = 60;
    show();
    start();
});


btnPaus.addEventListener('click', function () {
    if (timer === null) {
        start();
    } else {
        stop();
    }
});


inp.addEventListener('input', function () {
    let text = inp.value;

    if (text.includes(':')) {
        let parts = text.split(':');
        let m = Number(parts[0]);
        let s = Number(parts[1]);
        time = m * 60 + s;
    } else {
        time = Number(text);
    }
});

// показать начальное время
show();