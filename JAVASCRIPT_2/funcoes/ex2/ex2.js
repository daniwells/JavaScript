function factorial(num=0){

    if (num == 0){
        return 0
    }

    let r = num
    if (r > 1){
        r = r * factorial(num - 1)
    }
    return r
}

console.log(factorial(5))