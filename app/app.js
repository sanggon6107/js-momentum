const logInInput = document.querySelector("#logInForm input");
const logInForm = document.querySelector("#logInForm");

function onLogInSubmit(event){
    event.preventDefault();
    console.log("Hello, " + logInInput.value);
}


logInForm.addEventListener("submit", onLogInSubmit)