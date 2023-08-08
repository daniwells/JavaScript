n = 10

txt =`${n} X `

for (c = (n - 1); c >= 1; c--){
    n *= c
    if (c != 1){
        txt += c + " X "
    }else{
        txt += c 
    }
    
}

console.log(txt + ` = ${n}`)