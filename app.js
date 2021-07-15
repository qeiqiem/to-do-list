// const loginForm = document.querySelector("#login-form");

// ver1.
// const loginForm = document.getElementById('login-form');
// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('button');

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
// * uppercase
// string만 포함한 변수를 담을 때는 대문자로 변수이름을 짓는다. (관습)
// login~, greeting처럼 중요한 정보를 담은 게 아니기 때문에

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
    const userName = loginInput.value;

    greeting.innerText = `Hello, ${userName}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit);

// ex
// click으로 조건을 걸 때, 내 마우스의 x, y 어느 시점에 클릭을 했는지도 알 수 있다. => js가 제공해주는 Free info!
// console.dir로 어떤 동작을 갖는지 알 수 있음.
