let secondsRemaining
let intervalHandle

let tick = () =>{
    const time = document.getElementById('time')

    let min = Math.floor(secondsRemaining/60)
    let sec = secondsRemaining - (min*60)

    if(sec < 10){
        sec = "0" + sec
    }
    let message = min.toString() + ":" + sec
    time.innerHTML = message

    if(secondsRemaining === 0){
        alert('Done')
        clearInterval(intervalHandle)
        window.location.reload(false);
    }
    if(secondsRemaining != 0){
        document.getElementById('btn').disabled = true
    }
    secondsRemaining--
}
let startCountdown = () =>{
    
    let minutes = document.getElementById('minutes').value

    if(isNaN(minutes)){
        alert("Please Enter A Number")
        return
    }
    secondsRemaining = minutes*60
    intervalHandle = setInterval(tick, 1000)
}

