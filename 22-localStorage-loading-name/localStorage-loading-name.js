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



// 조건 분기로 이 페이지를 다시 열었을 때도 이름을 기억하도록 한다.
if(localStorage.getItem(USER_NAME_KEY) === null)
{
    logInForm.classList.remove(HIDDEN);
    logInForm.addEventListener("submit", onLogInSubmit);
}
else 
{
    paintGreeting(USER_NAME_KEY);
}


