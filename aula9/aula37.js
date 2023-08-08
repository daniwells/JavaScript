let num = [2, 8, 54, 23, 4]

num.push(34)

num.sort((a, b) => a - b)

txt = ''
for (var c = 0; c <= (num.length - 1); c++){
    txt += num[c] + ' '
}
console.log(txt)

console.log('--------------------------------')
txt = ''
for (let e in num){
    txt += num[e] + ' '
    
}
console.log(txt)

console.log(num.indexOf(54))
console.log(num.indexOf(3))