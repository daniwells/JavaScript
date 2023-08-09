var array = []

function len(v){
    return v.length
}

function max(list){
    let mai = 0

    for (let e in list){
        if (e == 0){
            mai = list[e]
        }else{
            if (list[e] > mai){
                mai = list[e]
            }
        }
    }
    return mai
}

function min(list){
    let men

    for (let e in list){
        if(e == 0){
            men = list[e]
        }else{
            if (list[e] < men){
                men = list[e]
            }
        }
    }
    return men
}

function sum(list){
    let total = 0
    for (let p in list){
        total += list[p]
    }

    return total
}

function med(list){
    m = 0
    let c = 0

    for (let e in list){
        m += list[e]
        c++
    }

    let med = m / c

    return med
}

function end(){
    let main = document.getElementsByTagName('main')[0]

    let p = document.createElement('p')
    //p.text = `<p>In total the list has ${len(array)} values</p>`

    p.innerHTML += `<p>The total of numbers in the list is ${len(array)} values</p>`
    p.innerHTML += `<p>The greater value is ${max(array)}</p>`
    p.innerHTML += `<p>The lower value is ${min(array)}</p>`
    p.innerHTML += `<p>The sum of all values is ${sum(array)}</p>`
    p.innerHTML += `<p>The average of all values is ${med(array)}</p>`

    main.appendChild(p)
}

function press(){
    let table = document.querySelector('select#Mtable')
    let num = document.getElementsByName('num')[0]
    let n = Number(num.value)
   
    let item = document.createElement('option')
    item.text = `Value ${n} added`
    if (array.length == 0){
        array.push(n)
        table.appendChild(item)
    }else{
        var check = 0
        for (let e in array){
            if (array[e] == n){
                check = 1
                window.alert('This number is already on the list!')
                break
            }   
        }
        if (check == 0){
            array.push(n)
            table.appendChild(item)    
        }
    }
    console.log(max(array))
    console.log(array)
    console.log(min(array))
    console.log(sum(array))
    console.log(med(array))
}


