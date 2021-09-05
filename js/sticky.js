const stickys = document.querySelectorAll(".sticky");
// querySelectorAll을 써야 해당 클래스 이름을 가진 모든 요소를 움직일 수 있음. 그래서 querySelector썼을 때 하나의 요소만 움직였다.

// forEach API : forEach(callback(element, index-optional))
stickys.forEach((sticky, idx) => {
    // 개체에 '우선순위' 부여, css에서 order 때 배웠던 것
    let priority = sticky.getAttribute("priority");

    if (!priority) {
        priority = idx + 1;
        sticky.setAttribute("priority", priority);
    }
    sticky.style["z-index"] = priority;

    // 개체선택 이벤트 바인딩
    sticky.addEventListener("mousedown", handleMouseDown);
});

// 마우스 이벤트 바인딩
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);
// sticky Element에 바인딩 할 경우, 마우스 커서를 빠르게 움직이여서 공을 벗어나면 제어가 안되기 때문.
