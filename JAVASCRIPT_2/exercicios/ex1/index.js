function CelciusConvert(grau){
    let convert = (grau - 32) * (5/9)

    return convert
}

console.log(CelciusConvert(77))

const CelCon = grau=>(grau-32) * (5/9)

console.log(CelCon(77))