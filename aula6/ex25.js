//Calculating the Age
var now = new Date()
var yearNow = now.getFullYear()

var yearBirth = 2006

var age = yearNow - yearBirth

console.log(age)

if (age < 18){
    df = 18 - age
    console.log(`${df} years left to the enlistment!`)
}else if (age == 18){
    console.log('This is the year of enlistment!')
}else{
    df = age - 18
    console.log(`Delayed ${df} years for enlistment`)
} 