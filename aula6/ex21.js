var note1 = 8.5
var note2 = 4.5

var med = (note1 + note2) / 2

if (med <= 10 && med >= 0 ){
    if(med >= 6){
        console.log('Congratulations, do you was approved.')
    }else{
        console.log('Sorry, do you was disapproved')
    }
}else{
    console.log('Enter the correct notes.')
}
