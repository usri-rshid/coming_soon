let countDownDate = new Date("Sept 01,2024 00:00:00");
let x = setInterval(function () {
  let now = new Date().getTime();
  let delay = countDownDate - now;

  let days = Math.floor(delay / (1000 * 60 * 60 * 24));
  let hours = Math.floor((delay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((delay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let seconds = Math.floor((delay % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
