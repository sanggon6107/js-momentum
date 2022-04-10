// array
const days = ["mon", "tue", "wen", "thu", "fri", "sat", 1, false, true, undefined, "ㅇㅇ"]; // 한 array에 여러가지 타입을 넣을 수 있다.
console.log(days[3]);
days.push("sun");
console.log(days[10]);
days[0] = 3;


// const로 선언된 days에 push가 왜 가능한가?
// const로 선언된 변수는 재할당, 재선언은 불가능하다.
// 따라서, 
// const days = [1, 2, 3];
// days = [4];
// 와 같은 재선언은 불가능하다. 하지만 멤버 함수인 push는 가능한데, 변수 자체를 재할당/재선언 하는 것이 아니라 함수를 호출하는 것이기 때문이다.
// operator[]도 같은 의미에서 해석할 수 있다.