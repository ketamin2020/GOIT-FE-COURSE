const logItems = function (logItems) {
  for (let i = 0; i < logItems.length; i += 1) {
    let fullWords = `${i + 1} - ${logItems[i]}`;
    console.log(fullWords);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70]);
