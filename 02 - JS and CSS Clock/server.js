let second = document.querySelector('.second-hand');
let min = document.querySelector('.min-hand');
let hour = document.querySelector('.hour-hand');

function setDate() {
  let nowTime = new Date();

  let secondsDegrees = nowTime.getSeconds() * 6; // 360/60
  let minsDegrees = nowTime.getMinutes() * 6 + (secondsDegrees * 6) / 60; // 360/60
  let hourDegrees = nowTime.getHours() * 30 + (minsDegrees * 6) / 60; // 360/12

  second.style.transform = `rotate(${secondsDegrees}deg)`;
  min.style.transform = `rotate(${minsDegrees}deg)`;
  hour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
