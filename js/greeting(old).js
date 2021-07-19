const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

// local stroage : js파일의 요모조모를 저장한다.
// 이걸 사용해서 이름을 저장하도록 할 수 있다.
const USER_LS = 'currentUser',
    SHOWING_CN = 'showing'; //showing className

function handleSubmit(event) {
    event.preventDefault(); // input의 기본값 작동으로 새로고침 되는 걸 막는다. 이벤트가 금지됨.
    const currentValue = input.value;
    paintGreeting(currentValue);
}

function askName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        // user X
        askName();
    } else {
        // user O
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
