const bg = [
    "bg1.JPG",
    "bg2.JPG",
    "bg3.JPG",
    "bg4.JPG",
    "bg5.JPG",
    "bg6.JPG",
    "bg7.JPG",
];

const todayBg = bg[Math.floor(Math.random() * bg.length)];

// append : 가장 뒤에 추가
// prepend : 가장 앞에 추가
const bgContainer = document.getElementById("bg-container");
const bgImg = document.createElement("img");
bgImg.src = `img/${todayBg}`;
bgContainer.appendChild(bgImg);

// # Trial 1
// document.body.innerHTML = `<img src="img/${todayBg}">`;
// innerHTML을 사용하고 싶어서 시도했는데, 이렇게 하면 body전체가 이 코드로 대체된다.
// img태그를 미리 삽입한 후 innerHTML 쓰는 방법은 src만 대체하는 방법을 몰라서 일단 pass..

// # Trial 2
// document.body.innerHTML += `<img src="img/${todayBg}">`;
// background.js 스크립트 실행 바로 다음 img 태그가 생성된다.
// 그래서 위치상 appendChild()가 더 의미있는 코드가 되는 것 같다.

//////////////////////
// # Trial 3
// 혹시 모를 이미지 추가를 위해 백그라운드 이미지에 id값을 주고 css를 컨트롤하고 싶었다.
// 1) 가장 처음 소스에 백틱으로 제작부렸는데 그냥 syntax error
// 2) createElemet로 div 생성 후 appendChild, div에 innerHTML하니까 오브젝트 자체가 들어가서 실패.
// 3) index.html에 bg div를 만들고, 위처럼 해당 컨테이너에 appendChild로 해결했다.
