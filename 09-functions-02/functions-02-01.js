function myFunction(c){
    c += 5;
    console.log(c);
}


a = 5;

console.log(a); //5

myFunction(a);  //10

console.log(a); //5. 함수에 인자로 들어갈 때 복사본 생성 (c++의 call by value와 같다.)