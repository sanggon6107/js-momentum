// style은 css가 한다.
// javascript는 interation만 담당한다.

const h1 = document.querySelector("h1");

function onClick(){
    // const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)){ // classList : h1객체가 소속되어있는 class들의 정보를 담고 있다.
    //     h1.classList.remove(clickedClass); // classList는 add, remove 등의 멤버함수를 가지고 있다.
    // } else{
    //     h1.classList.add(clickedClass); // class = "... clickedClass"
    // }
    h1.classList.toggle("clicked"); // 위의 코드와 같은 기능을 수행. 즉, 클래스 list에 clicked가 포함되어있지 않으면
                                    // clicked 추가하고, 있으면 지운다.
}

h1.addEventListener("click", onClick); // 클릭하면 onClick 함수가 호출되고 h1태그의 클래스 이름이 active가 된다.