let arr = [3,4,3,6,7,]
let [a,b] = arr
console.log(a,b, c='8',...rest) //8 aayega c me na ki 3 

//spread Operator
let arr1 = [3,5,8]
let obj1 = {...arr1}
console.log(obj1)

function sum(v1,v2,v3){
    return(v2 + v3)
}

console.log(sum(...arr1))

let obj2 ={
    name: "Deepu"
    Company : "Xyz "
    address : "XYZ"
}
console.log({...obj2, name:"Jyram"})