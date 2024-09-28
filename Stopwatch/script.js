const display = document.getElementById("Time");

let timer = null;
let startTime = 0;
let elpsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elpsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elpsedTime = Date.now()-startTime;
        isRunning = false;
    }
}
function reset(){
     timer = null;
 startTime = 0;
 elpsedTime = 0;
 isRunning = false;
 display.textContent = " 00 : 00 : 00 : 00 ";
}

function update(){
    const currentTime = Date.now();
    elpsedTime = currentTime - startTime;

    let hr = Math.floor(elpsedTime / (1000 * 60 *60));
    let min = Math.floor(elpsedTime / (1000 * 60)%60);
    let sec = Math.floor(elpsedTime / (1000)%60);
    let mili = Math.floor(elpsedTime %1000 /10);
    
    hr = String(hr).padStart(2,0);
    min = String(min).padStart(2,0);
    sec = String(sec).padStart(2,0);
    mili = String(mili).padStart(2,0);
    display.textContent = `${hr} : ${min} : ${sec} : ${mili}`
}