function sayHello()
{
    console.log("hello world!");
}

// html이 처음 뜨고, 일정 시간이 지난 후에 함수를 호출하고 싶을 때 : setTimeout을 쓴다.
// setInterval과의 차이점 : 호출을 한번만 한다.

setTimeout(sayHello, 5000);