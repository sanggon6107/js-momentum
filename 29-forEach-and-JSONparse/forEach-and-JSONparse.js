const toDoForm = document.querySelector("#toDoForm");
const toDoInput = toDoForm.querySelector("input"); // querySelector는 document뿐만 아니라
                                                   // 박스와 같은 요소에서도 호출할 수 있다.
const toDoList = document.querySelector("#toDoList");

const toDos = [];
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
    deleteButton.addEventListener("click", deleteSomethingToDo);
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
    // forEach : array의 모든 요소에 대해 함수 호출해준다.
    parsedToDos.forEach((item) => console.log(`this is the turn of ${item}`)); // arrow function expressions
    // forEach는 첫 인자로 array의 각 요소를 자동으로 넣어준다. 즉, forEach에 들어가는 함수에 매개변수가 하나 있으면,
    // 그 함수의 매개변수는 forEach를 호출한 array의 각 요소가 된다.
}