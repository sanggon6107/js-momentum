const clock = document.querySelector("#clock");

function refreshClockState()
{
    const date = new Date();
    clock.innerText =`${date.getHours() % 12} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

refreshClockState() // html이 뜨고 setInterval에 1초 넣었으므로 1초 후에 처음 함수 호출된다. 따라서 처음에 한번 호출한다.
setInterval(refreshClockState, 1000); // 5초마다 inverval함수 호출한다.