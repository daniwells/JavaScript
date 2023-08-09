function press(){
    let start_str = document.getElementsByName('start')[0]
    start = parseInt(start_str.value)

    let end_str = document.getElementsByName('final')[0]
    end = parseInt(end_str.value)

    let step_str = document.getElementsByName('step')[0]
    step = parseInt(step_str.value)

    let result = document.getElementsByTagName('p')[0]

    var txt = ''

    if (start < end){
        for (let c = start; c <= end; c += step){
            if (c + step > end){
                txt += c
            }else if (c == end){
                txt += c
            }else{
                txt += c + ' -> '
            }
            result.innerHTML = `A count from ${start} to ${end} in ${step} to ${step}:`
            result.innerHTML += `<p>${txt}</p>`
        }
    }else if (start > end){
        for (let c = start; c >= end; c -= step){
            if (c - step < end){
                txt += c
            }else if (c == end){
                txt += c
            }else{
                txt += c + ' -> '
            }
            result.innerHTML = `A count from ${start} to ${end} in ${step} to ${step}:`
            result.innerHTML += `<p>${txt}</p>`
        }  
    }
}