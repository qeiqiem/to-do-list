const videos = [
    "vi1.mp4",
    "vi2.mp4",
    "vi3.mp4",
    "vi4.mp4",
    "vi5.mp4",
];

const todayVi = videos[Math.floor(Math.random() * videos.length)];

const video = document.querySelector("#video-container video");
video.src = `video/${todayVi}`;

// const video = document.createElement("video");
// videoContainer.appendChild(video);
