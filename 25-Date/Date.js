const clock = document.querySelector("#clock");

function refreshClockState()
{
    const date = new Date(); // js에서는 class로 선언된 객체의 경우 new 키워드를 써야하는 것 같다. (동적 할당?)
    clock.innerText =`${date.getHours() % 12} : ${date.getMinutes()} : ${date.getSeconds()}`; // Date객체는 시간 정보를 담고있다.
}

refreshClockState()
setInterval(refreshClockState, 1000); // 5초마다 inverval함수 호출한다.