// 아래와 같이 js로 style을 바꿀 수 있다.
// 하지만 기본적으로 style은 css가 전담하는 것이 좋다.
// javascript는 인터랙션 담당, css는 style담당.
const h1Tag = document.querySelector(".myClass:first-child h1");

console.dir(h1Tag);

let isClicked = false;

const innerTextInit = h1Tag.innerText;
const colorInit = h1Tag.style.color;

changeToBlue = function(){
    h1Tag.innerText = "I'm clicked!";
    h1Tag.style.color = "blue";
    isClicked = true;
}

changeToYellow = function(){
    if(isClicked === false){
        h1Tag.innerText = "Mouse on the h1Tag!";
        h1Tag.style.color = "yellow";
    }
    
}

getH1TagBack = function(){
    if(isClicked === false)
    {
        h1Tag.innerText = innerTextInit;
        h1Tag.style.color = colorInit;
    }
}

// 이벤트 리스너 추가.
h1Tag.addEventListener("click", changeToBlue); // 콜백함수. "클릭"에 대해 changeToBlue 함수를 호출한다.


console.dir(h1Tag);  // h1Tag 객체의 안을 들여다보면, on~이 있다.
                     // 이벤트 리스너의 첫 번째 인자로는 대체적으로 on을 뺀 단어를 넣을 수 있다.
                     // ex) onclick -> click, oncopy -> copy ...

h1Tag.addEventListener("mouseenter", changeToYellow);
h1Tag.addEventListener("mouseleave", getH1TagBack); // 뿐만 아니라 copy, resize, 인터넷 연결 상황 등등 많은 상황에 대해서 리스너를 추가할 수 있다.


// 참고 : h1Tag.onclick = 함수이름   과 같은 형태로도 가능하다.
// 하지만 addEventListner() 함수는 .removeEventListner를 호출할 수 있다는 점이 장점이다.