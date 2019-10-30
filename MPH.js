function howFast(MPH){
    return MPH >= 190 ? "Oh you're FAST FAST": "Join the club Bucko"
}


const result1 = howFast(MPH) 
document.querySelector('#para').innerText = result1