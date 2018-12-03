const hourHand = document.querySelector("#handHour");
const minuteHand = document.querySelector("#handMinutes");
const secondHand = document.querySelector("#handSeconds");

function initClock() {
  const date = new Date();
  const hour = date.getHours() % 12;
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  let hourDeg = hour * 30 + 0.5 * minute - 75;
  let minuteDeg = minute * 6 + 0.1 * seconds + 158;
  let secondDeg = seconds * 6;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  setTimeout(initClock, 1000);
}

initClock();
