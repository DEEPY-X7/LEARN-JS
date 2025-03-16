//array map method
let arr = [45,23,21]
let a = arr.map((value, index,deepu )=>{
console.log(value, index, deepu)
return value +1;
})
console.log(a)

//array filer method
let arr2 = [45,23,21,0,89,2,9,7]
let a2 = arr2.filter((value)=>{
    return value<10
})
console.log(a2)

//reduce method
let arr3 = [2,6,4,8,4,0,4,7,]
let newarr3 = arr3.reduce((deepu,yadav)=>{
    // return deepu + yadav;        //35
    // return deepu * yadav;       //0
    // return deepu - yadav;      //-31
    return deepu / yadav;        //infinity
})
console.log(newarr3)

