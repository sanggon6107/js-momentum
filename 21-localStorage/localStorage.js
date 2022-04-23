const logInInput = document.querySelector("#logInForm input");
const logInForm = document.querySelector("#logInForm");
const greeting = document.querySelector("#greeting");


/* 출처 : MDN. localStorage에 대하여.
localStorage 읽기 전용 속성을 사용하면 Document 출처의 Storage 객체에 접근할 수 있습니다.
저장한 데이터는 브라우저 세션 간에 공유됩니다.
localStorage는 sessionStorage와 비슷하지만, localStorage의 데이터는 만료되지 않고
sessionStorage의 데이터는 페이지 세션이 끝날 때,
즉 페이지를 닫을 때 사라지는 점이 다릅니다.
("사생활 보호 모드" 중 생성한 localStorage 데이터는 마지막 "사생활 보호" 탭이 닫힐 때 지워집니다.)

localStorage에 저장한 자료는 페이지 프로토콜별로 구분합니다.
특히 HTTP(http://example.com)로 방문한 페이지에서 저장한 데이터는
같은 페이지의 HTTPS(https://example.com)와는 다른 localStorage에 저장됩니다.

키와 값은 항상 각 문자에 2바이트를 할당하는 UTF-16 DOMString의 형태로 저장합니다.
객체와 마찬가지로 정수 키는 자동으로 문자열로 변환합니다.
*/


const HIDDEN = "hidden";

function onLogInSubmit(event){
    event.preventDefault();
    localStorage.setItem("userName", logInInput.value); // 로컬 스토리지에 저장한다.
    logInForm.classList.add(HIDDEN);  // hidden이라는 이름의 class를 정해둔다. display : none으로 하면 숨김 가능.
    greeting.innerText = `Hello, ${localStorage.getItem("userName")}.`; // getItem으로 로컬 스토리지에 저장된 값 가져올 수 있다.
    greeting.classList.remove(HIDDEN);
}


logInForm.addEventListener("submit", onLogInSubmit)