function setDate() {
    var second = document.querySelector('.second-hand');
    var min = document.querySelector('.minute-hand');
    var hour = document.querySelector('.hour-hand');

    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    
    var secondsDegrees = ((seconds / 60) * 360) + 90; 
    var minutesDegrees = ((minutes / 60) * 360) + 90;
    var hourDegrees = ((hours / 12) * 360) + 90;
    
    second.style.transform = `rotate(${secondsDegrees}deg)`;
    min.style.transform = `rotate(${minutesDegrees}deg)`;
    hour.style.transform = `rotate(${hourDegrees}deg)`;

    
    console.log(hours);
}

setInterval(setDate, 1000);