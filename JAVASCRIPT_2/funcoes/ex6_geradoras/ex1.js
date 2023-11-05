/*function* colors(){
    yield 'red'
    yield 'green'
    yield 'blue'
}

const itc = colors()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)*/

/*function* questions(){
    const name=yield "What's your name?"
    const sport=yield "What's your favorite sport?"
    return "Your name is " + name + ", your favorite sport is " + sport
}

const itp = questions()
console.log(itp.next().value)
console.log(itp.next('Daniel').value)
console.log(itp.next('Soccer').value)*/

function* count(){
    let c=0
    while (true){
        yield ++c
    }
}
const itc = count()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

/*for (let c of itc){
    console.log(c)
}*/