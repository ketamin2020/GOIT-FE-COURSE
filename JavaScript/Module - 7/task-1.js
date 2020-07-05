const itemRef = document.querySelectorAll(".item");
console.log(`В списке ${itemRef.length} категории`);

itemRef.forEach((e) =>
  console.log(`Категория: ${e.firstElementChild.textContent}
Количество элементов: ${e.lastElementChild.childElementCount}`)
);
