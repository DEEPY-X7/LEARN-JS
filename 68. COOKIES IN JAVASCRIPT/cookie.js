// console.log(document.cookie)
// document.cookie= "name= deepu 54297889874798523"
// document.cookie= "name0= yadav 54297889874798523"
// document.cookie= "name2= deepu 54297889874798523"
// console.log(document.cookie)

let key = prompt("Enter your key");
let value = prompt("Enter your value");
document.cookie  = `${encodeURIComponent(key)}, ${encodeURIComponent(value)}`;
console.log(document.cookie)

