const sayHello = () => {   //sayHello is a Function
    console.log("Hello")   //Printing
}
sayHello()    //calling...

//the another way function 
const Hello = () => console.log("Hello")  //Not recommended because readbility is reduced
Hello();

const say = (name, greeting) => (console.log(greeting + " " + name))
say("Namaste!", "Deepuji")


const X = {
    name: "Deepu",
    Roll: "GeniusMind",
    Exp: 17,
    show: function () {
        console.log(`This name is ${this.name}`)
    }
    
}
console.log(X.name, X.Roll, X.Exp)