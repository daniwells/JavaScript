function check(){

    var now = new Date()
    yearA = now.getFullYear()

    var yearB = document.querySelector('input#birth')
    yearBirth = Number(yearB.value)

    age = yearA - yearBirth

    var sex = document.getElementsByName('sex')
    console.log(sex[0].checked)
    
    if (yearBirth > 0 && (sex[0].checked == true || sex[1].checked == true)){
        var img = document.getElementById('img')
        img.style.width = '300px'
        img.style.height = '300px'
        img.style.borderRadius = '50%'
        img.style.backgroundColor = 'black'
        img.style.backgroundSize = 'cover'
        img.style.visibility = 'hidden'

        if (sex[0].checked){
            if (age < 6){
                img.style.backgroundImage = 'url(imgs/1-5a.jpg)'
                img.style.visibility = 'visible'

            }else if(age < 11){
                img.style.backgroundImage = 'url(imgs/6-10a.jpg)'
                img.style.visibility = 'visible'

            }else if (age < 16){
                img.style.backgroundImage = 'url(imgs/11-15a.jpg)'
                img.style.visibility = 'visible'

            }else if (age < 20){
                img.style.backgroundImage = 'url(imgs/16-19a.jpg)'
                img.style.visibility = 'visible'

            }else if (age < 31){
                img.style.backgroundImage = 'url(imgs/20-30a.jpg)'
                img.style.visibility = 'visible'

            }else if (age < 45){
                img.style.backgroundImage = 'url(imgs/31-44a.jpg)'
                img.style.visibility = 'visible'

            }else if (age < 56){
                img.style.backgroundImage = 'url(imgs/45-55a.jpg)'
                img.style.visibility = 'visible'
                
            }else if(age >= 56){
                img.style.backgroundImage = 'url(imgs/56+a.jpg)'
                img.style.visibility = 'visible'

            }
        }else{
            if (age < 6){
                img.style.backgroundImage = 'url(imgs/6-10b.jpg)'
                img.style.visibility = 'visible'

            }else if(age < 11){
                img.style.backgroundImage = 'url(imgs/6-10b.jpg)'
                img.style.visibility = 'visible'

            }else if (age < 16){
                img.style.backgroundImage = 'url(imgs/11-15b.jpg)'
                img.style.visibility = 'visible'

            }else if (age < 20){
                img.style.backgroundImage = 'url(imgs/16-19b.jpg)'
                img.style.visibility = 'visible'

            }else if (age < 31){
                img.style.backgroundImage = 'url(imgs/20-30b.jpg)'
                img.style.visibility = 'visible'

            }else if (age < 45){
                img.style.backgroundImage = 'url(imgs/31-44b.jpg)'
                img.style.visibility = 'visible'

            }else if (age < 56){
                img.style.backgroundImage = 'url(imgs/45-55b.jpg)'
                img.style.visibility = 'visible'
                
            }else if(age > 56){
                img.style.backgroundImage = 'url(imgs/56+b.jpg)'
                img.style.visibility = 'visible'

            }
        }
        }
}
