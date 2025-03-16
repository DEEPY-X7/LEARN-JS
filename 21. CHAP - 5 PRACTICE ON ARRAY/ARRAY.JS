//create an array of numbers and take input from the user to add nimrs to this array

// let arr = [1,2,3,4,9,6,7,4,]
// // let a = prompt("Enter a number")  // prompt is not working is vscode but this all codes run on console 
// arr.push(a)
// console.log(arr)

// Keep adding numkers to the array in 1 until o is added to the array
// let a;
// do {
    //     a = prompt("wnter a 0 for stopping this")
    // } while(arr!=0);
    // console.log(arr)
    
    // filter for numbers dirsible by lo from a given array
    let arr = [1,2,3,4,9,6,7,4,]
    let newarr = arr.filter((z)=>{
    return z % 10 == 0;
})
console.log(newarr)


//Create An srray of Square of giren numbers
let arr2 = [1,2,3,4,9,6,7,4,]
let newarr2 = arr.map((z)=>{
    return z*z;
})
console.log(newarr2)

//Use reduce to calculate factorial of a given number froM an array  of first n natural numbers (n being the nu,ners whose factorial needs to be calculated)
let arr3 = [1,2,3,4,5,6,7,8,9,10]
let fact = arr3.reduce((a,b)=>{
    return a*b;
})
console.log(fact)
//output is 3628800
