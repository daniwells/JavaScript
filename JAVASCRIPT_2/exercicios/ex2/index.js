// const areaT = (b, h)=>(b * h) / 2

// console.log(areaT(4, 9))

/////////////////////////////////////////

// function areaPerCirlce(radius){
//     let a = Math.PI * (radius ** 2)
//     let p = Math.PI * radius * 2

//     let r1 = Math.round(a)
//     let r2 = Math.round(p)

//     return `The area is ${r1} and the perimeter is ${r2}`
// }

// console.log(areaPerCirlce(8))

/////////////////////////////////////////

// function revert(num){
//     n = String(num)
//     if (n.length == 1){
//         return num
//     }else{
//         let str = ''
//         for (let e in n){
//             let p = ''
//             p = n[(n.length-1) - e]   
//             str += p
//         }
//         console.log(str)
//     }
// }


// revert(2945)

/////////////////////////////////////////

// function countVowels(txt){
//     let t = String(txt).toUpperCase()

//     let er = /[^a-z0-9]/gi
//     var text = t.normalize('NFD').replace(er, "")

//     cont = 0

//     for (let e in text){
//         if (text[e] == 'A' || text[e] == 'E' || text[e] == 'I' || text[e] == 'O' || text[e] == 'U'){
//             ++cont
//         }    
//     }
//     return cont
// }

// console.log(countVowels('mexilhãosinho'))

/////////////////////////////////////////

// function factorial(num=0){
//     if (num == 0){
//         return num
//     }

   
//     if (num > 1){
//         num *= factorial(num - 1)
//     }

//     return num

// }

// var num = 5
// var n = factorial(num)


// var str = ''

// for (let c=num; c > 0; c--){
//     if (c != 1){
//         str += `${c} X `
//     }else{
//         str += c + ' = '
//     }
// }

// str += n

// console.log(str)

/////////////////////////////////////////

// function countCaractere(txt, caractere){
//     cont = 0
//     let t = String(txt).normalize().toUpperCase()
//     let c = String(caractere).normalize().toUpperCase()

//     for (let e in t){
//         if (t[e] == c){
//             cont++
//         } 
//     }
//    return cont
// }

// console.log(countCaractere('Abacaxi', 'a'))

/////////////////////////////////////////

function primeNumber(num){
    cont = 0
    for(let c=1; c <=num; c++){
        
        if (num % c == 0){
            cont += 1
        }
    }
    if (cont == 2){
        return `The number ${num} is a prime number!`
    }else{
        return `The number ${num} is not a prime number!`
    }
}

console.log(primeNumber(13))
console.log(primeNumber(8))

