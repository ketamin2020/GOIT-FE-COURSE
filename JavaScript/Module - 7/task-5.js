const inputRef = document.querySelector("#name-input");
const ouputRef = document.querySelector("#name-output");
const inpText = ouputRef.textContent;

inputRef.addEventListener("input", handleInput);

function handleInput(event) {
  if (event.target.value === "") {
    return (ouputRef.textContent = inpText);
  }
  return (ouputRef.textContent = event.target.value);
}
