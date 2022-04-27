const clock = document.querySelector("#clock");

function refreshClockState()
{
    const date = new Date();
    const hours = String(date.getHours() % 12).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText =`${hours} : ${minutes} : ${seconds}`; 
}

refreshClockState() // html이 뜨고 setInterval에 1초 넣었으므로 1초 후에 처음 함수 호출된다. 따라서 처음에 한번 호출한다.
setInterval(refreshClockState, 1000); // 5초마다 inverval함수 호출한다.