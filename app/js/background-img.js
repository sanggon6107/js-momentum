const imgList = [ "0.jpg", "1.jpg", "2.jpg", "3.jpg" ];

const imgToShow = imgList[Math.floor(Math.random() * imgList.length)];

// html의 <img src = "./0.jpg"> 와 같은 효과를 줄 수 있다. 즉, 지금까지는 html의 요소를 자바스크립트에서 가져올
// 수 있었지만 이번에는 자바스크립트에 존재하는 객체를 html에 엘리먼트로서 추가할 수 있는 것.

const backGroundImage = document.createElement("img"); // div, span처럼 img라는 엘리먼트를 만든다.
backGroundImage.src = `./img/${imgToShow}`; // img의 src 태그를 추가한다.
document.body.appendChild(backGroundImage); 
