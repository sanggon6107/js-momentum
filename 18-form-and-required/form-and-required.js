const logInInput = document.querySelector("#logInForm input");
const logInBtn = document.querySelector("#logInForm #logInBtn");


function onClickLogInBtn(){
    // 이름을 1자 이상 15자 이하로 설정하고 싶다.
    // 아래에 if문 써도 되지만 html의 도움을 받아 해당 기능을 간단하게 구현할 수 있다.
    // form 과 required maxlengt로 구현.
    // 다만 form의 경우, 엔터를 치거나 버튼을 클릭했을 때 submit된다. 즉, 전체 페이지가 새로고침 된다.
    console.log("Hello, " + logInInput.value);
}

logInBtn.addEventListener("click", onClickLogInBtn);