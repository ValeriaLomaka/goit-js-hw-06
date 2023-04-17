let counterValue = 0;

const valueRef = document.querySelector("#value");
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');

btnDecrementRef.addEventListener("click", handleBtnDecrement);

btnIncrementRef.addEventListener("click", handleBtnIncrement);

function handleBtnDecrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function handleBtnIncrement() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
