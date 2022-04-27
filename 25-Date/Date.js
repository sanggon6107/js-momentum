const clock = document.querySelector("#clock");

function refreshClockState()
{
    const date = new Date(); // js에서는 class로 선언된 객체의 경우 new 키워드를 써야하는 것 같다. (동적 할당?)
                             // // Date객체는 시간 정보를 담고있다.
    const hours = String(date.getHours % 12).padStart(2, "0"); // 숫자로 바꿀 때는 parseInt를 호출했지만, str타입으로
                                                               // 파싱할 때는 String객체의 constructor에 집어넣는다.
                                                               // 연산자 재정의로 string타입 리턴하게 되어있나?
    const minutes = String(date.getMinutes).padStart(2, "0");  // padStart : 첫 번째 인자만큼의 길이가 안될 때 두번째 인자로
                                                               // 오는 문자를 앞에 채워준다.
    const seconds = String(date.getSeconds).padStart(2, "0");
    clock.innerText =`${hours} : ${minutes} : ${seconds}`; 
}

refreshClockState()
setInterval(refreshClockState, 1000); // 5초마다 inverval함수 호출한다.