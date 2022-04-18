// style은 css가 한다.
// javascript는 interation만 담당한다.

const h1 = document.querySelector("h1");

function onClick(){
    h1.innerText = "I'm clicked!";
    h1.className = "active";  // css로 active 클래스를 미리 만들어둔다.
}

h1.addEventListener("click", onClick); // 클릭하면 onClick 함수가 호출되고 h1태그의 클래스 이름이 active가 된다.