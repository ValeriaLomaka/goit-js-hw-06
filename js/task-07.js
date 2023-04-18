const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

// console.log(spanEl);

inputEl.addEventListener("input", handleInputEvent);

function handleInputEvent(event) {
    spanEl.style.fontSize = event.currentTarget.value + 'px'; 

}