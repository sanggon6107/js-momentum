const logInInput = document.querySelector("#logInForm input");
const logInForm = document.querySelector("#logInForm"); // form을 받아온다.

const a = document.querySelector("div #linkToGoogle");

function onLogInSubmit(event){ // event로 들어오는 인자는 submitEvent
    event.preventDefault();
    console.log("Hello, " + logInInput.value);
}

function onGoogleClick(event){ // event로 들어오는 인자는 clickEvent. 클릭 좌표 등의 다양한 정보를 담고 있다.
    event.preventDefault();
    console.log("Default prevented")
}

// submit은 기본적으로 브라우저가 새로고침 되게 만들어져있다.
// 그렇다면 어떻게 새로고침을 방지할 것인가?
// -> 먼저 리스너로 함수를 추가한다. 리스너에 함수를 추가하고 그 함수에 매개변수를 추가해보자.
// 리스너를 추가하고, 버튼이 클릭되어 onLogInSubmit 함수가 호출 될 때, 첫 번째 인자는 반드시 방금 일어난 이벤트(Event)'의
// 정보를 담고있는 객체가 된다. 즉, 그 이벤트가 일어난 시각, target 등의 자료가 event에 들어온다.
// event의 함수인 preventDefault()를 호출하면 기본 동작인 '새로고침'을 막을 수 있다.
logInForm.addEventListener("submit", onLogInSubmit)

a.addEventListener("click", onGoogleClick);