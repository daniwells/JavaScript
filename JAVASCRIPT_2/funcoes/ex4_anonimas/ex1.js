function func(...num){
    let r = 0 
    for (let v in num){ 
        r += num[v]
    }
    return r 
}

const f= function(...num){ 
    let r = 0
    for (let v in num){ 
        r += num[v]
    }
    return r
}

console.log(f)
console.log(f(2, 3))

const f2 = new Function("v1", "v2", "v3", "return v1 + v2 + v3") // Função Construtor

console.log(f2(3, 5, 4))