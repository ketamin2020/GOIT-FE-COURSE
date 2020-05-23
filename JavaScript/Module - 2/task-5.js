const checkForSpam = function (message) {
  let fingWordSpam = message.toLowerCase().includes("spam");
  let fingWordSale = message.toLowerCase().includes("sale");
  return fingWordSpam || fingWordSale;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest  technology news")); // false

console.log(checkForSpam("JavaScript  weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
