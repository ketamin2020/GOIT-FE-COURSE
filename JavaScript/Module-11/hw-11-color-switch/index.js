import { colors } from "/colorsArr.js";
const startRef = document.querySelector('button[data-action="start"]');
const stopRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector("body");
const startBtnClick = startRef.addEventListener("click", changeColor);
const stopBtnClick = stopRef.addEventListener("click", stop);
let setId = null;

function changeColor() {
  removeListener();
  setId = setInterval(() => {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length)];
    bodyRef.style.backgroundColor = randomColor;
  }, 1000);
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function removeListener() {
  startRef.disabled = true;
  startRef.removeEventListener("click", changeColor);
}

function stop() {
  startRef.disabled = false;
  clearInterval(setId);
  startRef.addEventListener("click", changeColor);
}
