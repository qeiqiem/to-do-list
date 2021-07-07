const form = document.querySelector('js-form'),
    input = form.querySelector('input');

// local stroage : js파일의 요모조모를 저장한다.
// 이걸 사용해서 이름을 저장하도록 할 수 있다.
const USER_LS = 'currentUser';

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
    } else {
    }
}

function init() {
    loadName();
}

init();
