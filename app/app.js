const logInInput = document.querySelector("#logInForm input");
const logInForm = document.querySelector("#logInForm");
const greeting = document.querySelector("#greeting");


const HIDDEN = "hidden";
const USER_NAME_KEY = "userName";

function paintGreeting(userName)
{
    greeting.innerText = `Hello, ${localStorage.getItem(userName)}.`;
    greeting.classList.remove(HIDDEN);
}

function onLogInSubmit(event)
{
    event.preventDefault();
    localStorage.setItem(USER_NAME_KEY, logInInput.value);
    paintGreeting(USER_NAME_KEY);
}




if(localStorage.getItem(USER_NAME_KEY) === null)
{
    logInForm.classList.remove(HIDDEN);
    logInForm.addEventListener("submit", onLogInSubmit);
}
else 
{
    paintGreeting(USER_NAME_KEY);
}


