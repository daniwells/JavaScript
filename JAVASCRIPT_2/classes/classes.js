//Jeito antigo
// function Person(name){
//     this._name = name
// }

// var person = new Person('Joao')
// console.log(person._name)

////////////////////////////////////////////
class Person2{
    constructor(name){
        this._name = name
    }

    set name(string){
        this._name = string 
    }

    get name(){
        return this._name
    }

    walk(){
        return `${this._name} is hiking`
    }
}

var person = new Person2('Daniel')
console.log(person.name)
person.name = "Marcos"
console.log(person.name)