const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
   
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;
    
    if (email === '' || password === '') {
        return alert("FILL IN ALL THE FIELDS!");
    }

    console.log(
        {
            email: email,
            password:password,
        }
    )
    event.currentTarget.reset();
}
