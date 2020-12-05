
let element = document.documentElement; //获取HTML元素

let isListeningMouse = false;

let contexts = new Map();

element.addEventListener("mousedown", e => {

    console.log(e.button)

    let context = Object.create(null);
    contexts.set("mouse" + (1 << e.button), context)
    start(e, context);

    let mousemove = e => {
        let button = 1;

        while(button <= e.buttons) {
            if(button & e.buttons) {
                let key;
                // buttons顺序 跟 e.button的顺序 第二位和第三位是相反的
                if(button === 2)
                   key = 4;
                else if(button === 4)
                   key = 2;
                else 
                   key = button;

                let context = contexts.get("mouse" + key);
                move(e, context);                
            }
            button = button << 1;
        }
    }

    let mouseup = e => {

        let context = contexts.get("mouse" + (1 << e.button));

        end(e, context);

        contexts.delete("mouse" + (1 << e.button));

        if(e.buttons === 0) {
            document.removeEventListener("mousemove", mousemove);
            document.removeEventListener("mouseup", mouseup);
            isListeningMouse = false;            
        }

    }
    if(!isListeningMouse) {
        document.addEventListener("mousemove", mousemove)
        document.addEventListener("mouseup", mouseup)  
        isListeningMouse = true;      
    }
})

element.addEventListener("touchstart", e => {
    for(let touch of e.changedTouches) {
        console.log(touch)
        let context = Object.create(null);
        contexts.set(touch.identifier, context);
        start(touch, context);
    }
})

element.addEventListener("touchmove", e => {
    for(let touch of e.changedTouches) {
        let context = contexts.get(touch.identifier);
        move(touch, context);
    }
})

element.addEventListener("touchend", e => {
    for(let touch of e.changedTouches) {
        let context = contexts.get(touch.identifier);
        end(touch, context);
        contexts.delete(touch.identifier);
    }
})

element.addEventListener("touchcancel", e => {
    for(let touch of e.changedTouches) {
        let context = contexts.get(touch.identifier);
        cancel(touch, context);
        contexts.delete(touch.identifier);
    }
})

// let handler;
// let startX, startY;
// let isPan = false, isTap = true, isPress = false;

let start = (point, context) => {
    // console.log("start", point.clientX, point.clientY)
    context.startX = point.clientX, context.startY = point.clientY;
    context.points = [{
        t: Date.now(),
        x: point.clientX,
        y: point.clientY
    }];

    context.isTap = true;
    context.isPan =  false;
    context.isPress = false;

    context.handler = setTimeout(() => {
        console.log("press")
        context.isTap = false;
        context.isPan =  false;
        context.isPress = true;
        context.handler = null;
    }, 500)
}

let move = (point, context) => {
    // 判断移动10px
    let dx = point.clientX - context.startX, dy = point.clientY - context.startY;
    if(!context.isPan && dx ** 2 + dy ** 2 > 100){
        context.isTap = false;
        context.isPan =  true;
        context.isPress = false;
        console.log("panstart");
        // 触发pan事件, 移除press事件
        clearTimeout(context.handler);
    }

    if(context.isPan) {
        console.log(dx, dy);
        console.log("pan");
    }

    context.points = context.points.filter(point => Date.now() - point.t < 500)
    context.points.push({
        t: Date.now(),
        x: point.clientX,
        y: point.clientY 
    })
}

let end = (point, context) => {
    if(context.isTap) {
        dispatch("tap", {})
        clearTimeout(context.handler);
    }
    if(context.isPan) {
        console.log("panend")
    }
    if(context.isPress) {
        console.log("pressend")
    }

    context.points = context.points.filter(point => Date.now() - point.t < 500);

    let d, v;
    if(!context.points.length) {
        v = 0;
    } else {
        d =  Math.sqrt((point.clientX - context.points[0].x) ** 2 + 
            (point.clientY - context.points[0].y) ** 2);

        v = d / (Date.now() - context.points[0].t);
    }


    if(v > 1.5) {
        console.log('flick');
        context.isFlick = true;
    } else {
        context.isFlick = false;
    }
}

let cancel = (point, context) => {
    clearTimeout(context.handler);
    console.log("cancel", point.clientX, point.clientY)
}

// 派发事件
function dispatch(type, properties) {
    let event = new Event(type);
    for(let name in properties) {
        event[name] = properties[name];
    }
    element.dispatchEvent(event);

}
