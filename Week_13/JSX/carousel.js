import {Component} from './framework.js'

export class Carousel extends Component {
    constructor() {
        super()
        this.attributes = Object.create(null)
        // this.root = document.createElement('div')
    }
    setAttribute(name,value) {
        this.attributes[name] = value;
    }
    render() {
        // console.log(this.attributes.src)
        this.root = document.createElement("div");
        this.root.classList.add("carousel")
        for(let record of this.attributes.src) {
            let child = document.createElement("div")
            child.style.backgroundImage = `url('${record}')`
            this.root.appendChild(child)
        }

        let position = 0;

        // 鼠标控制
        this.root.addEventListener("mousedown",event => {
            let children = this.root.children
            let startX = event.clientX

            let move = event => {
                let x = event.clientX - startX

                let current = position - ((x - x % 500 ) / 500);

                // 当前元素的前一个和后一个挪到正确的位置
                for(let offset of [-1,0,1]) {
                    let pos =  current + offset;
                    // 加上取余的数 再取余（取余运算处理循环）
                    pos = (pos + children.length) % children.length
                    
                    children[pos].style.transition = ""
                    children[pos].style.transform = `translateX(${- pos * 500 + offset * 500 + x % 500}px)`
                }

                // for(let child of children) {
                //     child.style.transition = "none"
                //     child.style.transform = `translateX(${- position * 500 + x}px)`
                // }
            }

            let up = event => {
                let x = event.clientX - startX
                position = position - Math.round( x / 500);
                for(let child of children) {
                    child.style.transition = "";
                    child.style.transform = `translateX(${- position * 500}px)`
                }
                // mouseup不去响应 mousemove
                document.removeEventListener('mouseomve',move)
                document.removeEventListener('mouseup', up)
            }

            // mousedown 之后去响应 mousemove, mouseup之后不去响应 mousemove,调用上面的removeEventListener
            this.root.addEventListener("mousemove", move)
            this.root.addEventListener('mouseup',up)
        })
        // let currentIndex = 0;
        // setInterval(() => {
        //     let children = this.root.children;

        //     let nextIndex = (currentIndex + 1) % children.length;
        //     // ++current;
        //     // 在 1-n 之间循环，对 n 取余
        //     // current =  current % children.length
        //     let current = children[currentIndex];
        //     let next = children[nextIndex];

        //     next.style.transition = "none";
        //     next.style.transform = `translateX(${100 - nextIndex * 100}%)`;

        //     setTimeout(() => {
        //         next.style.transition = '';
        //         current.style.transform = `translateX(${ - 100 - currentIndex * 100}%)`
        //         next.style.transform = `translateX(${- nextIndex * 100}%)`;

        //         currentIndex = nextIndex

        //     }, 16)
            
        // },3000)


        return this.root
    }
    mountTo(parent) {
        parent.appendChild(this.render())
    }
}