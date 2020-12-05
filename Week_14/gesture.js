
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

let start = (point) => {
    console.log("start", point.clientX, point.clientY)
}

let move = (point) => {
    console.log("move", point.clientX, point.clientY)
}

let end = (point) => {
    console.log("end", point.clientX, point.clientY)
}

let cancel = (point) => {
    console.log("cancel", point.clientX, point.clientY)
}
