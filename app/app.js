const logInInput = document.querySelector("#logInForm input");
const logInForm = document.querySelector("#logInForm");
const greeting = document.querySelector("#greeting");


const HIDDEN = "hidden";

function onLogInSubmit(event){
    event.preventDefault();
    localStorage.setItem("userName", logInInput.value);
    logInForm.classList.add(HIDDEN);
    greeting.innerText = `Hello, ${localStorage.getItem("userName")}.`;
    greeting.classList.remove(HIDDEN);
}


logInForm.addEventListener("submit", onLogInSubmit)