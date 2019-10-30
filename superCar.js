


function horsePowerToWeight(horsePower,weight){
    let hpw = horsePower/weight

    return hpw >= 1 ? "You own a SuperCar" :"Your car is not that special";
}




function howFast(MPH){
    return MPH >= 190 ? "Oh you're FAST FAST": "Join the club Bucko"
}



let message = prompt('Please enter your car horse power and weight and speed');

const arr = message.split(' ')


const horsePower = arr[0]
const weight = arr[1]
const MPH = arr[2]
const result = horsePowerToWeight(horsePower,weight)
const result1 = howFast(MPH) 

document.querySelector('#result').innerText= result 
document.querySelector('#para').innerText = result1


