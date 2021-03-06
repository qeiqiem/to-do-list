// const loginForm = document.querySelector("#login-form");

// ver1.
// const loginForm = document.getElementById('login-form');
// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('button');

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const welcome = document.getElementById("name");

// * uppercase
// string만 포함한 변수를 담을 때는 대문자로 변수이름을 짓는다. (관습)
// login~, greeting처럼 중요한 정보를 담은 게 아니기 때문에

// 반복되는 것들은 변수로 지정해주자.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const savedUser = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    // default 동작 : submit -> refresh 방지!
    event.preventDefault();

    // 함수의 인자로 임의의 event를 받는다 =>
    // 즉, 해당 동작(event)로 처음 실행되는 이벤트를 인자로 넘겨주는 것임.
    // onLoginSubmit은 'submit'을 조건으로 이벤트리스너를 만들었으니
    // submit 시 자동으로 실행되는 이벤트를 인자로 받는 것.
    // 해당 event를 preventDegfault()하는 작동을 연결해줌
    // 그래서 그 서브밋을 방지하는 작동을 하게 된다.
    // console.log(event)로 어떤 이벤트가 실행됐는지 알 수 있음

    loginForm.classList.add(HIDDEN_CLASSNAME);

    // localStroage

    // localStorage에 userName info가 있다면 form을 표기하지 않음
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    // greeting.innerText = `Hello, ${userName}!`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings();
}

function paintGreetings() {
    const userName = localStorage.getItem(USERNAME_KEY);
    const toDoForm = document.getElementById("todo-form");
    // 다시 있는지 찾아줘야한다... but 42번 라인에 이어 두번씩 로컬스토리지를 찾는 격이니, 개인의 선호에 따라 param을 전달하는 코드 or 아닌 코드로 작성하면 된다.
    greeting.innerText = `Hello, ${userName}!`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    welcome.classList.remove(HIDDEN_CLASSNAME);

    // 여기서 실행하니까 바로 뜸
    toDoForm.classList.remove("hidden");
}
// 사실 이 함수는 인자를 받을 필요가 없다.
// LS에 저장된 이름을 넘겨주기만 하면 되니까 (이미 스토리지에 info already existed)
// ==> savedUser

if (savedUser === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // 단독으로 실행했던 코드를 실행코드에 맞게 넣어줌
    loginForm.addEventListener("submit", onLoginSubmit);
    // ex
    // click으로 조건을 걸 때, 내 마우스의 x, y 어느 시점에 클릭을 했는지도 알 수 있다. => js가 제공해주는 Free info!
    // console.dir로 어떤 동작을 갖는지 알 수 있음.
} else {
    // hidden 클래스를 없애고 표기할 텍스트를 넣어줘야 함
    // 위에 나왔던 코드는 로컬스토리지 저장됐을 때 케이스가 아니고
    // 폼으로 제출하는 과정에서 저장되는 로직을 표시해주는 것이기 때문에
    // greeting.innerText = `Hello, ${savedUser}!`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // ==> 이 과정을 위에서도 반복하기 때문에 함수로 따로 빼준다.

    paintGreetings();
    // LS에 저장된 정보를 인자로 넘겨줌 (인자로 넘겨줄때의 코드. 변경됨.)
}
