const logInInput = document.querySelector("#logInForm input");
const logInBtn = document.querySelector("#logInForm #logInBtn");
const logInForm = document.querySelector("#onLogInSubmit"); // form을 받아온다.

function onClickLogInBtn(){
    console.log("Hello, " + logInInput.value);
}

logInBtn.addEventListener("click", onClickLogInBtn);


// submit은 기본적으로 브라우저가 새로고침 되게 만들어져있다.
// 
logInForm.addEventListener("submit", )