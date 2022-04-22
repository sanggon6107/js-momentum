const logInInput = document.querySelector("#logInForm input");
const logInForm = document.querySelector("#logInForm");
const greeting = document.querySelector("#greeting");


const HIDDEN = "hidden";

function onLogInSubmit(event){
    event.preventDefault();
    const userName = logInInput.value;
    logInForm.classList.add(HIDDEN);  // hidden이라는 이름의 class를 정해둔다. display : none으로 하면 숨김 가능.
    greeting.innerText = `Hello, ${userName}.`;
    greeting.classList.remove(HIDDEN);
}


logInForm.addEventListener("submit", onLogInSubmit)