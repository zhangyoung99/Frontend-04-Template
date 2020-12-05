
let element = document.documentElement; //获取HTML元素


element.addEventListener("mousedown", e => {
    start(e);
    let mousemove = e => {
        // console.log(e.clientX, e.clientY);
        move(e);
    }

    let mouseup = e => {
        end(e);
        element.removeEventListener("mousemove", mousemove);
        element.removeEventListener("mouseup", mouseup);
    }
    element.addEventListener("mousemove", mousemove)
    element.addEventListener("mouseup", mouseup)
})

element.addEventListener("touchstart", e => {
    for(let touch of e.changedTouches) {
        start(touch);
    }
})

element.addEventListener("touchmove", e => {
    for(let touch of e.changedTouches) {
        move(touch);
    }
})

element.addEventListener("touchend", e => {
    for(let touch of e.changedTouches) {
        end(touch);
    }
})

element.addEventListener("touchcancel", e => {
    for(let touch of e.changedTouches) {
        cancel(touch);
    }
})

let handler;
let startX, startY;
let isPan = false, isTap = true, isPress = false;

let start = (point) => {
    // console.log("start", point.clientX, point.clientY)
    startX = point.clientX, startY = point.clientY;

    isTap = true;
    isPan =  false;
    isPress = false;

    handler = setTimeout(() => {
        console.log("press")
        isTap = false;
        isPan =  false;
        isPress = true;
        handler = null;
    }, 500)
}

let move = (point) => {
    // 判断移动10px
    let dx = point.clientX - startX, dy = point.clientY - startY;
    if(!isPan && dx ** 2 + dy ** 2 > 100){
        isTap = false;
        isPan =  true;
        isPress = false;
        console.log("panstart");
        // 触发pan事件, 移除press事件
        clearTimeout(handler);
    }

    if(isPan) {
        console.log(dx, dy);
        console.log("pan");
    }
}

let end = (point) => {
    if(isTap) {
        console.log("tap");
        clearTimeout(handler);
    }
    if(isPan) {
        console.log("panend")
    }
    if(isPress) {
        console.log("pressend")
    }
}

let cancel = (point) => {
    clearTimeout(handler);
    console.log("cancel", point.clientX, point.clientY)
}
