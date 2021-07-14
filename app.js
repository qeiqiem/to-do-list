// const loginForm = document.querySelector("#login-form");

// ver1.
// const loginForm = document.getElementById('login-form');
// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('button');

const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

function onLoginBtnClcik() {
    alert('clickedz');
}

loginButton.addEventListener('click', onLoginBtnClcik);
