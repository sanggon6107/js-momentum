// object. 객체.
const player = {
    name: "sg",
    age: 30,
    fat: false,
};

console.log(player.name);  // 액세스 방법 1
console.log(player["age"]); // 액세스 방법 2


player.fat = true; // array처럼, const라도 객체 안에 있는 내용물을 바꾸거나 추가할 수는 있다.
player.lastName = "banana"; // 요소 추가.