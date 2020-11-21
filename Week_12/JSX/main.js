// for(let i of [1,2,3]) {
//     console.log(i)
// }
function createElement(type, attributes, ...children) {
    let element;
    
    if(typeof type === 'string'){
        element = new ElementWrapper(type)
    } else {
        element = new type
    }
    for(let name in attributes) {
        element.setAttribute(name, attributes[name])
    }
    for(let child of children) {
        // 文本，添加文本节点
        if(typeof child === 'string') {
            child = new TextWrapper(child)
        }
        element.appendChild(child)
    }
    return element;
}

class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value)
    }
    appendChild(child) {
        // this.root.appendChild(child)
        child.mountTo(this.root)
    }
    mountTo(parent) {
        // this.root = document.createElement('div')
        parent.appendChild(this.root)
    }
}

class TextWrapper{
    constructor(content) {
        this.root = document.createTextNode(content)
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value)
    }
    appendChild(child) {
        // this.root.appendChild(child)
        child.mountTo(this.root)
    }
    mountTo(parent) {
        // this.root = document.createElement('div')
        parent.appendChild(this.root)
    }
}

class Div {
    constructor() {
        this.root = document.createElement('div')
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value)
    }
    appendChild(child) {
        // this.root.appendChild(child)
        child.mountTo(this.root)
    }
    mountTo(parent) {
        // this.root = document.createElement('div')
        parent.appendChild(this.root)
    }
}

let a = <div id="a">
        <span>a</span>
        <span>b</span>
    </div>

// document.body.appendChild(a);
a.mountTo(document.body)