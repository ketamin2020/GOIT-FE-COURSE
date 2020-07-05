const inputRef = document.querySelector('input[data-length="6"]');
const inputLength = inputRef.getAttributeNode("data-length").value;

inputRef.addEventListener("change", (event) => {
  const inputVal = event.target.value.length;
  inputVal <= inputLength
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
});
