
function press(){
    var table = document.querySelector('select#Mtable')
    var num = document.getElementsByName('num')[0]

    if (num.value.length == 0){
        window.alert('Enter a Number to continue!')
    }else{

        var n = Number(num.value)

        for (let c = 1; c <= 11; c++){
            var item = document.createElement('option')
            r = c * n
            item.text = `${c} X ${n} = ${r}`
            item.value = `table${c}`
            table.appendChild(item)
        }
        item.text = `---------------`
        table.appendChild(item)
    }
}