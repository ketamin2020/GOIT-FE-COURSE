const buttonDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);
const valueRef = document.querySelector("#value");

let counterValue = 0;
buttonDecrementRef.addEventListener("click", handleDecrement);
buttonIncrementRef.addEventListener("click", handleIncrement);

function handleDecrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}
function handleIncrement() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
