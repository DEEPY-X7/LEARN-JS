let btn = document.getElementsByTagName('button')[0];
let btn1 = document.getElementsByTagName('button')[1];
let btn2 = document.getElementsByTagName('button')[2];
console.log(btn,btn1,btn2)

document.getElementById('google').addEventListener('click',function(){
    let url = "https//www.google.com";
    window.focus();
})
document.getElementById('facebook').addEventListener('click',function(){
    let url = "https//www.faccebook.com";
    window.focus();
})
document.getElementById('twitter').addEventListener('click',function(){
    let url = "https//www.twitter.com";
    window.focus();
})

// setTimeout(() => {
//     console.log("Namste bharat!")
// },  5000);

// setTimeout(() => {
//     let a;
//     while (a==5000) {
//     console.log("Namste bharat!")
//     }
// },  5000);

// setInterval(async function(){
//     let url = 'https://jsonplaceholder.typicode.com/todos/1';
//     console.log(await fetch(url).then(response => response.json()))
// },5000)


setInterval(() => {
   document.querySelector('#bulb').classList.toggle('bulb')
}
, 300); 