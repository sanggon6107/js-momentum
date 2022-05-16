const toDoForm = document.querySelector("#toDoForm");
const toDoInput = toDoForm.querySelector("input"); // querySelector는 document뿐만 아니라
                                                   // 박스와 같은 요소에서도 호출할 수 있다.
const toDoList = document.querySelector("#toDoList");

const toDos = [];

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