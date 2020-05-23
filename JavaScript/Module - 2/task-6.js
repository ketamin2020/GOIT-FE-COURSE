let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  const numberValue = Number(input);
  const numberIsNaN = isNaN(numberValue);

  if (numberIsNaN) {
    alert("Было введено не число, попробуйте еще раз ввести число!!!");
  } else if (input === null) {
    alert("Спасибо за внимание!");
  } else if (numberIsNaN === false) {
    numbers.push(numberValue);
  }
} while (input !== null);

for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма введеных чисел = ${total}`);
