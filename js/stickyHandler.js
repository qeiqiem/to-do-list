// 마우스 누르고 있을 때 이벤트 핸들러
function handleMouseDown(event) {
    event.preventDefault();

    const stickys = document.querySelectorAll(".sticky");
    const el = event.target;
    const classList = el.classList;

    if (!classList.contains("hold")) {
        // 클릭했을 때, 마우스 커서의 XY좌표
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // 선택한 el의 XY좌표 (왼쪽 상단 모서리 기준)
        const stickyPos = el.getBoundingClientRect(); //viewPort 기준으로 위치값을 가져옴
        const stickyX = stickyPos.x;
        const stickyY = stickyPos.y;

        // 선택한 el 안에 있는 마우스 커서의 XY좌표
        const gapX = mouseX - stickyX;
        const gapY = mouseY - stickyY;

        el.setAttribute("gap-x", gapX);
        el.setAttribute("gap-y", gapY);

        // 선택한 el을 맨 앞으로 가지고 오기
        const maxPriority =
            (stickys.length > 0
                ? Math.max.apply(
                      null,
                      Array.from(stickys).map((sticky) =>
                          sticky.getAttribute("priority")
                      )
                  )
                : 9999) + 1;
        el.setAttribute("priority", maxPriority);
        el.style["z-index"] = maxPriority;

        // 삼항연산자 (condition ? exprIfTrue : exprIfFalse)
        // 길이가 0이상이면 ~ , 아니면 ...

        // 선택한 el에 'hold' class를 추가
        classList.add("hold");
    }
}

// el 움직임 이벤트 핸들러
function handleMouseMove(event) {
    event.preventDefault();

    const el = document.querySelector(".sticky.hold");
    if (el) {
        // 움직이는 마우스 커서의 XY좌표
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // 선택한 el 안에 있는 마우스 커서의 XY좌표
        const gapX = el.getAttribute("gap-x");
        const gapY = el.getAttribute("gap-y");

        // 마우스 커서의 위치에 따른 el의 XY좌표
        const stickyX = mouseX - gapX;
        const stickyY = mouseY - gapY;

        // el의 위치를 변경
        el.style.left = stickyX + "px";
        el.style.top = stickyY + "px";
    }
}

// el 놓기 이벤트 핸들러
function handleMouseUp(event) {
    event.preventDefault();

    const el = document.querySelector(".sticky.hold");
    if (el) {
        // 움직이면 적용된 속성 및 class를 삭제
        el.removeAttribute("gap-x");
        el.removeAttribute("gap-y");

        el.classList.remove("hold");
    }
}
