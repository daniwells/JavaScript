let friend = ['josé', 'M', 83.2]

console.log(friend[0])

let friend2 = {
    nome:'josé', 
    sexo:'M', 
    peso:83.2,
    engordar(p=0){
        this.peso += p
    }
}

console.log(friend2.peso)

friend2.engordar(2)

console.log(friend2.peso)
