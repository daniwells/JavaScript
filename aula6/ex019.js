var now = new Date()

var hour = now.getHours()

if (hour < 6){
    console.log('Dawn')
}else if (hour <= 12){
    console.log('morning')
}else if (hour < 18){
    console.log('afternoon')
}else if (hour <= 23){
    console.log('night')
}else if (hour < 0 || hour > 23){
    console.log('Enter a valid hour!!')
}