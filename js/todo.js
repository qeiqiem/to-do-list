const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = []; // newTodo를 담을 그릇
/* but LS는 array 형태로 저장할 수 X. only save TEXT. 문자만 저장 가능.
 그래서 stringify를 하지 않고 LS에 저장하면 value가 a, b, c 이런 텍스트 형태로 저장이 된다.

 json.stringify() => array자체를 문자열로 저장
 json.parse() => array형태로 재변경
*/

const TODOS_KEY = "todos";

// JSON.stringify() : array or object를 string 타입으로 변환시켜준다.
function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""; // enter시 todo input창 비워줌
    toDos.push(newToDo); //toDos Array에 저장 (LS에 저장하기 위해)
    paintToDo(newToDo); // todo list를 생성해서 보이게 함
    saveToDo(); // todos LS에 svae
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function deleteToDo(event) {
    // 클릭시 자동적으로 실행되는 이벤트를 인자로 넘겨받으면
    // 그 안에 target이라는 property가 있고, 그 안에 parentElement
    // parentElement로 그 엘리먼트가 속한 곳이 어디인지 알 수 있음.
    // innerText로 console 출력해보면 "click"시 어느 list가 parent인지 파악할 수 있다.
    // console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
}

const SavedToDos = localStorage.getItem(TODOS_KEY); // => just STRING

if (SavedToDos) {
    const parseToDos = JSON.parse(SavedToDos); // => ARRAY
    // array에서 각 개체당 실행하도록 반복하는 api. 반복문!
    parseToDos.forEach((items) => console.log(items));
}

// function items(item) {
//     console.log("name", item); // 순차적으로 지금 처리되는 아이템이 무엇인지 알 수 있음. event처럼 js가 제공해주는 기능!
// }
