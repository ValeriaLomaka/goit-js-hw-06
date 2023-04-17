const refs = {
    inputEl: document.querySelector("#name-input"),
    spanEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(e) {
    if (refs.inputEl.value === "") {
        return (refs.spanEl.textContent = "Anonymous");
    }
    refs.spanEl.textContent = e.currentTarget.value;
}


