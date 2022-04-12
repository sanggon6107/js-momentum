
// object에 함수 추가하기.
const player = {
    name : "Isac",
    sayHello : function(name_) {
        console.log("hello, my name is " + name_);
    }
};

console.log(player.name);
player.sayHello(player.name);