const logInInput = document.querySelector("#logInForm input");
const logInForm = document.querySelector("#logInForm");
const greeting = document.querySelector("#greeting");


const HIDDEN = "hidden";

function onLogInSubmit(event){
    event.preventDefault();
    const userName = logInInput.value;
    logInForm.classList.add(HIDDEN);
    greeting.innerText = `Hello, ${userName}.`;
    greeting.classList.remove(HIDDEN);
}


logInForm.addEventListener("submit", onLogInSubmit)