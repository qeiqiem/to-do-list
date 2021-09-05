// https://openweathermap.org/api
const API_KEY = "699759eb00e1a38d1db12d670d2c53c5";

function onGeoSuccess(position) {
    // js가 전달해주는 인자로 위도와 경도를 알 수 있다.
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // JS called URL for me using fetch()
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector(
                "#weather span:first-child"
            );
            const city = document.querySelector(
                "#weather span:last-child"
            );

            weather.innerText = `${data.weather[0].main}, ${data.main.temp}℃`;
            city.innerText = ` @${data.name}`;
        });

    /* fetch -> promise */
}
function onGeoError() {
    alert("error");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
/* 
getCurrentPosition은 2개의 args를 받는다.
1. 성공했을 때 실행할 함수()
2. error 발생했을 때 실행할 함수 ()
 */
