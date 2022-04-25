// setInterval에 함수와 인터벌을 넣으면, 해당 인터벌마다 함수를 호출해준다.
// js에서는 이러한 기능을 매우 간단하게 구현할 수 있다.

function sayHello()
{
    console.log("hello world!");
}

setInterval(sayHello, 5000); // 5초마다 inverval함수 호출한다.