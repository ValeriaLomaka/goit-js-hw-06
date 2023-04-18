const inputEl = document.querySelector("input");
const inputElValue = inputEl.dataset.length;

inputEl.addEventListener("blur", handleInputValue);

function handleInputValue(event) {
    if (
      event.currentTarget.value.length < inputElValue ||
      inputElValue < event.currentTarget.value.length
    ) {
      inputEl.classList.add("invalid");
      inputEl.classList.remove("valid");
    } else {
      inputEl.classList.add("valid");
      inputEl.classList.remove("invalid");
    }
}






