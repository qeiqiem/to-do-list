const clockContainer = document.querySelector('.js-clock'), //html이랑 클래스 이름을 같이 씀
    clockTitle = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date(); //date.getDate, getMinutes, getHours...등으로 시간을 가져올 수 있음
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // 삼항연산자
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
        minutes < 10 ? `0${minutes}` : minutes
    } : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

// first setting
function init() {
    getTime();
    setInterval(getTime, 1000);
    // setInterval(fn, 1000(m-second : 살행할 간격))
}

init();
