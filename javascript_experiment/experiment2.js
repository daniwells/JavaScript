function waitTime(time){
    const future = Date.now() + time 
    while(Date.now() < future) {}
}

setTimeout(() => console.log('Exec #01'), 3000)
setTimeout(() =>{
    waitTime(3000)
    console.log('Exec #02')
}, 300)


waitTime(5000)
console.log('end')