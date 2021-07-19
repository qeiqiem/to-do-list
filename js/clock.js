/* interval vs timeout
interval : 지정시간 간격으로 지속적 호출
timeout : 지정 간격을 두고 한 번 호출
 */

/*
 .padStard (문자의 총길이, 잎부터 추기힐 글자)
 .padEnd (문자의 총길이, 뒤부터 추기힐 글자)
 */

const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date(); //date.getDate, getMinutes, getHours...등으로 시간을 가져올 수 있음
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    // 삼항연산자
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
