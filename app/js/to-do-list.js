const toDoForm = document.querySelector("#toDoForm");
const toDoInput = toDoForm.querySelector("input"); // querySelector는 document뿐만 아니라
                                                   // 박스와 같은 요소에서도 호출할 수 있다.
const toDoList = document.querySelector("#toDoList");

let toDos = [];
const TODOS_KEY = "toDos";


function saveToDos()
{
    localStorage.setItem("toDos", JSON.stringify(toDos)); // localstorage는 string형태만 받을 수 있다. -> array를 통째로 string화 해서 저장한다.
}

function deleteSomethingToDo(event)
{
    parentNode = event.target.parentNode;
    parentNode.remove();
}

function addSomethingToDo(somethingToDo)
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    deleteButton.addEventListener("click", deleteSomethingToDo); // 의문점 : addEventListener는 이 함수안에서 호출되고 있다.
                                                                 // 이 함수가 끝나고 나면 여기에 있는 로컬 변수들은 사라지는 것이 아닌가?
                                                                 // 그렇다면 이벤트 리스너는 어떻게 되는가?
    li.appendChild(span);
    li.appendChild(deleteButton);
    span.innerText = somethingToDo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event)
{
    event.preventDefault();
    const somethingToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(somethingToDo);
    addSomethingToDo(somethingToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null)
{
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(addSomethingToDo);
}