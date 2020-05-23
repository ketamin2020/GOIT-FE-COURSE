const calculateEngravingPrice = function (message, pricePerWord) {
  let string = message.split(" ");
  const sumWords = string.length;

  return ` Сумма за гравировку строки ${message} равна ${
    sumWords * pricePerWord
  } кредитов.`;
};
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
