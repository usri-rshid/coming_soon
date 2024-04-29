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
function updateTime() {
  let now = new Date();

  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  const timeElement = document.querySelector(".time");

  timeElement.textContent = `${hours}:${minutes}:${seconds}`;

  const date = now.getDate();
  const year = now.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthName = months[now.getMonth()];
  const dayName = daysOfWeek[now.getDay()];

  const dateElement = document.querySelector(".date");

  dateElement.textContent = `${dayName}, ${monthName} ${date}, ${year}`;
}

updateTime();

setInterval(() => {
  updateTime();
}, 1000);
