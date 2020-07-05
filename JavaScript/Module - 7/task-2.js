const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const makeList = (ingredients) => {
  ingredients.forEach((element) => {
    const ingridientsList = document.createElement("li");
    const ingridientsListRef = document.querySelector("#ingredients");
    ingridientsList.textContent = element;
    ingridientsListRef.appendChild(ingridientsList);
  });
};

makeList(ingredients);
