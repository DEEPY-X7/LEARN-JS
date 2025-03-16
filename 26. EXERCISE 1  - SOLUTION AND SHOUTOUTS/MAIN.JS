alert("hello world")
let a = prompt("enter the value of a")
a = Number.parseInt(a)
alert("You Enterd a type of " + (typeof a))
let write = confirm("Do You want to write it to page")
if(write){
    document.write(a)
}else{
    console.log("please allow me a next time")
}