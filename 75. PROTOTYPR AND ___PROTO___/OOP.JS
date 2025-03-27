let a = {
    name : "Deepu",
    Work : "Bussinessman",
}
console.log(a)


let p = {
    run:()=>{
        alert(run)
    }
}
p.__proto__ = {
    name : "jackeychan",
};
a.__proto__= p
    a.run()
    console.log(a.name)
