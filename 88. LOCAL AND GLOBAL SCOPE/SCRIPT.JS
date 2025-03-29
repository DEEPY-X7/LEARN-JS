
//block scope
//function scope
//global scope


let a = 9; //global variable hai kyunki iska koi ghar nahi hai  ye kisi bhi sadak per so sakta hai
(async function LocalVariavles() {
    let a = 2; //Ye ladka apne ghar walon ki baat maanta hai Bahar walo ko pahchanta hi nahi
    console.log(a)
}())
console.log(a)  //print a global scope

let ax()
console.log(ax)