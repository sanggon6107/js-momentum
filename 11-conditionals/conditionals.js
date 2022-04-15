
// 참고 : === vs ==
// ==는 타입까지는 허용한다. 즉, 0 == '0', == [], 0 == false 주의 : "0" == [] 는 false이다.
// ===는 타입까지도 철저하게 검사한다.

//
function noUnder20(){
    const age = prompt("How old are you?"); // 매우 옛날 방식. 해당 함수로 띄운 창은 css등으로 꾸밀 수 없어서 현재는 거의 쓰이지 않는다.
                                            // 유저에게 직접 물어보는 창을 띄운다.
    if(parseInt(age) >=20){
        return true;
    }
    if (parseInt(age) === NaN){ // if(isNaN(age))
        return NaN;
    }
    else{
        return false;
    }
}

const result = noUnder20();

console.log(result);

