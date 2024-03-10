const initialText = document.getElementById("initialText");
const afterDobBtn = document.getElementById("afterDobButton");
const Btn = document.getElementById("btn");
const input = document.getElementById("Date");
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hours");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
let dateDob;
const makeTwoDigitNumber = (number) => {
  return number > 9 ? number : `0${number}`;
};
const updateAge = () => {
  const currDate = new Date();
  const dateDiff = currDate - dateDob;
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
  const day = Math.floor((dateDiff / (1000 * 60 * 60 * 24)) % 30);
  const hours = Math.floor((dateDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((dateDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((dateDiff / 1000) % 60);
  yearEl.innerHTML = makeTwoDigitNumber(year);
  monthEl.innerHTML = makeTwoDigitNumber(month);
  dayEl.innerHTML = makeTwoDigitNumber(day);
  hourEl.innerHTML = makeTwoDigitNumber(hours);
  minEl.innerHTML = makeTwoDigitNumber(minutes);
  secEl.innerHTML = makeTwoDigitNumber(seconds);
};
const localStorageGetter = () => {
  const year = localStorage.getItem("year");
  const month = localStorage.getItem("month");
  const date = localStorage.getItem("date");
  if (year && month && date) {
    dateDob = new Date(year, month, date);
  }
  updateAge();
};

const setDobHandler = () => {
  const dateString = input.value;
  dateDob = dateString ? new Date(dateString) : null;
  if (dateDob) {
    localStorage.setItem("year", dateDob.getFullYear());
    localStorage.setItem("month", dateDob.getMonth());
    localStorage.setItem("date", dateDob.getDate());
    initialText.classList.add("hide");
    afterDobBtn.classList.remove("hide");

    setInterval(() => updateAge(), 100);
  } else {
    afterDobBtn.classList.add("hide");
    initialText.classList.remove("hide");
  }
};
localStorageGetter();
setDobHandler();

let date = Btn.addEventListener("click", setDobHandler);
