// let은 constant가 아니므로 값을 바꿀 수 있다.
let a = 5;

console.log(a);

a += 100; // a의 값 변경

console.log(a);

a = "string"; // 문자열로 형식 변경

console.log(a);

// let a = 1001; // let은 재할당은 할 수 있어도 재선언할 수 없다.


// const, var, let 차이
// const : 재선언 불가, 재할당 불가
// var : 재선언 가능, 재할당 가능.  const와 let이 나오기 전에는 var만 있었기 때문에 값이 의도치 않게 변경되어도 에러가 발생하지 않았다.
// let : 재선언 불가, 재할당 가능


// let, const 를 우선적으로 사용하는게 좋다.