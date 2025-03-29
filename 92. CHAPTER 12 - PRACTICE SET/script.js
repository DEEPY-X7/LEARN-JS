//write  a javascript program to print the after 2 second delay hello sworld

setTimeout(() => {
    console.log("World")
}, 2000);
console.log("Hello")

//or

function sayHello() {
    console.log("hello")
    setTimeout(() => {
        console.log("World")
    }, 2000);
}
sayHello();

//outpu hello hello after 2 sec world world hahaahhahahhahahhahahahhahahha


//write a javascript prigram to find average of numbers in an arry using spread syntax

function sum(a,b,c)=>{
    return a + b + c
}
let x = [1,2,5]
console.log(sum(...x))


//3
function SImpleINtrst(p,r, t){
    return (p* r* t)/100;

}
console.log(SImpleINtrst(1000,5,1))
