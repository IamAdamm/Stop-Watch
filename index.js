let secondselapsed = 0
let interval = 0
const time = document.getElementById('time')

function padStart(value){
    return String(value).padStart(2,'0')
}

function setTime(){
    let minutes = Math.floor(secondselapsed/60)
    let seconds = secondselapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`   
}

function timer(){
    secondselapsed++;
    setTime()
}

function startTimer(){
    if(interval){
        stopTimer()
    }
interval = setInterval(timer, 1000)
}

function stopTimer(){
    clearInterval(interval)
}

function resetTimer(){
stopTimer()
secondselapsed = 0
setTime()
}