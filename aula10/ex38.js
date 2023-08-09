function pairOdd(n){
    if (n % 2==0){
        return `The number ${n} is pair!`
    }else{
        return `the number ${n} is odd!`
    }
}

num = pairOdd(20)

console.log(num)

////////////////////////////////////////////////////////

function sum(n1=0, n2=0){

    return `The sum between ${n1} and ${n2} is ${n1 + n2}`
}

console.log(sum(34, 24))

////////////////////////////////////////////////////////

let f = function(x){
    return x * 2
}

console.log(f(10))

////////////////////////////////////////////////////////

function factorial(n=0){
    txt = ''

    for (c = n; c > 1; c--){
        n *= (c-1)
        txt += c + ' X '
    }

    txt += ' = ' + n

    return txt
}

console.log(factorial(5))

////////////////////////////////////////////////////////
//RECURÇÃO

function factorial2(n){
    if (n == 1){
        return 1
    }else{
        let r = n * factorial2(n - 1)
        return r
    }
}

console.log(factorial2(5))