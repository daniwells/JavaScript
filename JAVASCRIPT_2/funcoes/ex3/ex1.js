function sum(...values){
    let leng = values.length

    res = 0
    for (let c = 0; c < leng; c++){
        res += values[c]
    }

    r = 0
    for (let v in values){
        r += values[v]
    }
    return `${r} and ${res}`
}

console.log(sum(5, 7, 2))