const findLongestWord = function (someString) {
  const someWords = someString.split(" ");
  let longWord = 0;
  let longestWord;

  for (let i = 0; i < someWords.length; i += 1) {
    if (someWords[i].length > longWord) {
      longWord = someWords[i].length;
      longestWord = someWords[i];
    }
  }
  return longestWord;
};

/*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
