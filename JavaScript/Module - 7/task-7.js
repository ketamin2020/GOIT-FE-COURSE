const inputRange = document.querySelector("#font-size-control");
const textRange = document.querySelector("#text");

inputRange.addEventListener("input", (event) => {
  textRange.style.fontSize = `${event.target.value}px`;
});
