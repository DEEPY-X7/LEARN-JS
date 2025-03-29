class Animal {
    constructor(name) {
        this._name = name
    }
    fly() {
        console.log("I Am Flying On Inside The getter")
    }get name(){
        return this._name
    }set _name(newName){
        this.name = newName
        console.log("Setter is flying with the me")
    }
}
let flyi = new Animal("DEEPU")
flyi.fly()
flyi.newName("jack")
console.log(flyi.name)


let a =3
console.log(a instanceof Animal)



/*class person {
    constructor(name) {
        this.name = name;

        console.log(`your name is ${name}`)
        return name
    }
    set name(newName){
        this.name = newName
    }

}
    */