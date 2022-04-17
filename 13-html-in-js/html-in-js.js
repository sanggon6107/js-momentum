
// document의 다양한 멤버 함수로 html의 엘리먼트를 변수에 격납할 수 있다.
const grab = document.getElementById("grab");

// getElementBy... 함수의 리턴값은 list형이다.
// console.dir()함수를 호출하고 html의 콘솔을 확인해보면, 해당 객체의 다양한 구성을 확인해볼 수 있다.
// console.dir()의 경우, jason의 형태로 구성요소들을 보여준다.
console.dir(grab); // grab객체가 autofocus, childElementCount 등등 다양한 데이터를 담고있는 것을 확인할 수 있다.
// grab.className = "className"; // 엘리먼트의 구성요소에 접근할 수 있다.

console.log(grab.innerText); // Grab me!
grab.innerText = "Got you!";
console.log(grab.innerText); // Got you!