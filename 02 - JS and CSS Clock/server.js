let second = document.querySelector('.second-hand');
let min = document.querySelector('.min-hand');
let hour = document.querySelector('.hour-hand');

function setDate() {
  let nowTime = new Date();

  let secondsDegrees = nowTime.getSeconds() * 6;
  let minsDegrees = nowTime.getMinutes() * 6;
  let hourDegrees = nowTime.getHours() * 12;

  second.style.transform = `rotate(${secondsDegrees}deg)`;
  min.style.transform = `rotate(${minsDegrees}deg)`;
  hour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
