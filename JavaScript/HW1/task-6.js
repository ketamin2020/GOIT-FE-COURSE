

let input;
let total = 0;

while(true){
input = prompt('Введите число');
 if(input === null){
     alert('Операция отменена пользователем');
     break;
 }
 input = Number(input);
  const notNumber = Number.isNaN(input);
  if(notNumber){
      alert('Вы ввели не число. Введите число!');
      continue;
  }
 total += input;
}

alert(`Общая сумма введенных чисел равна - ${total}`);
