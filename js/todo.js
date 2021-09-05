const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// newTodo를 담을 그릇
// const toDos = [];
// 1. const []로 array가 비어있는 상태로 선언했고, 아래에서 push()를 이 상태에 계속 해 주고 있기 때문에 새로고침하면 기존 정보가 덮어써지게 됨

// 2. => let으로 변환해서 추가할 수 있도록 만듦
let toDos = [];

const TODOS_KEY = "todos";

// JSON.stringify() : array or object를 string 타입으로 변환시켜준다.
function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
/* LS는 array 형태로 저장할 수 X. 
 only save TEXT. 문자만 저장 가능.
 그래서 stringify를 하지 않고 LS에 저장하면 value가 a, b, c 이런 텍스트 형태로 저장이 된다.

 json.stringify() => array자체를 문자열로 저장
 json.parse() => array형태로 재변경
*/

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id; //어떤 li를 지울건지 파악하기 위해 random으로 정해지는 id값을 li에 부여해줌

    const checkBox = document.createElement("div");

    // const check = document.querySelector("#todo-list div");
    checkBox.addEventListener("click", checkedToDo);

    // li.innerHTML = "<div></div>";

    const span = document.createElement("span");
    span.innerHTML += newToDoObj.text;
    // span.innerText = newToDoObj.text;

    const button = document.createElement("button");
    button.innerText = "🗑";
    button.addEventListener("click", deleteToDo);

    const hr = document.createElement("hr");

    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(hr);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""; // enter시 todo input창 비워줌
    // DB remove (array 저장 정보)를 위해 obj로 정보를 저장해 아이디값으로 삭제하도록 함.
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    if (toDos.length > 10) {
        alert("TOO MUCH THINGS TO DO! Please delete some others...");
    } else {
        toDos.push(newToDoObj); //toDos Array에 저장 (LS에 저장하기 위해)
        paintToDo(newToDoObj); // todo list를 생성해서 보이게 함
        saveToDo(); // todos LS에 svae
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function deleteToDo(event) {
    // 클릭시 자동적으로 실행되는 이벤트를 인자로 넘겨받으면
    // 그 안에 target이라는 property가 있고, 그 안에 parentElement
    // parentElement로 그 엘리먼트가 속한 곳이 어디인지 알 수 있음.
    // innerText로 console 출력해보면 "click"시 어느 list가 parent인지 파악할 수 있다.
    // console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    // ==> target.parentElement로 id를 추출할 수 있음
    // console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // toDo === 인자로 들어오는 toDos[]의 i번째 값들

    // li.id => string (document안의 Element이기 때문에)
    // toDo.id => number (Date함수로 생성했기 때문에)
    saveToDo(); // 필수!!!!
}

function checkedToDo(event) {
    console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.classList.toggle("checked");
}

/* filter 를 이용해서 새로운 array로 덮어쓰기를 한다. (pop을 쓸 수 없으니까.. )
filter는 forEach 로직처럼 작동한다.
반복적으로 해당 함수를 호출해서 배열의 index를 순차적으로 대입한다.
filter는 true를 리턴해야 덮어쓰기처럼 쓸 수 있댜! (=해당 인덱스를 유지할 수 있다)
*/

const SavedToDos = localStorage.getItem(TODOS_KEY); // => just STRING

if (SavedToDos) {
    const parseToDos = JSON.parse(SavedToDos); // => ARRAY
    toDos = parseToDos;
    parseToDos.forEach(paintToDo); // array에서 각 개체당 실행하도록 반복하는 api. 반복문!
}

// function items(item) {
//     console.log("name", item);
// 순차적으로 지금 처리되는 아이템이 무엇인지 알 수 있음. event처럼 js가 제공해주는 기능!
// }

if (savedUser === null) {
    toDoForm.classList.add("hidden");
    toDoList.classList.add("hidden");
} else {
    toDoForm.classList.remove("hidden");
    toDoList.classList.remove("hidden");
}
