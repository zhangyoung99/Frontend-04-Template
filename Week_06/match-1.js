function match(string){
    for(let c of string) {
        if(c === 'a') {
            return true
        }
    }
    return false;
}

match('I am a developer')


// indexOf 实现
function getA(str) {
    if(str.indexOf('a') === -1){
        return false
    } else {
        return true
    }
}

function matchAB(str) {
    let foundA = false;
    if (let c of str) {
        if(c === 'a') {
            foundA = true
        } else if(foundA && c === 'b') {
            return true
        } else {
            return false
        }
    }
    return false
}
