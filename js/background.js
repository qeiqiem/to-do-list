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

const bgImg = document.createElement("img");
bgImg.src = `img/${todayBg}`;

document.body.appendChild(bgImg);
// append : 가장 뒤에 추가
// prepend : 가장 앞에 추가
