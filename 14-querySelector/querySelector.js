
// getElementBy.. 함수는 엘리멘트를 특정하기 어렵다. 특히 어떤 태그(div등의 박스) 안에 또 다른 태그(h1과 같은 아이템)
// 가 들어있을 때 해당 태그만을 선택하기 어렵다.
const getById = document.getElementsByTagName("h1"); // h1태그를 모두 가져와서 array로 리턴한다.

const query = document.querySelector(".myClass h1"); // css 방식으로 select할 수 있다. .myClass안의 h1태그.

// 다만, querySelector는 해당 조건에 부합하는 요소 중 '첫 번째'만을 리턴한다. 만약, css조건에 맞는 모든 요소를 리턴받고 싶다면
// querySelectorAll() 함수를 써야한다.

const queryAll = document.querySelectorAll(".myClass h1");

const query2 = document.querySelector(".myClass2 #here"); // here에 접근.

console.dir(query2);
query2.textContent = "text100!!!";
query2.innerText = "innerText";