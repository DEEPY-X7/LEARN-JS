/*
//syncromus  programming
let a = prompt("waht is your name?");
let b = prompt("what is your age?");
let c = prompt("what is your favourate color")
console.log(a + " is " + b + " years old and has "+ c + "favorate color.");

//asyncromus programming
setTimeout(() => {
    console.log("hey i am good ")
}, 1000);

*/

//callback action
function loadscript(src, callback){
    let script = document.createElement('script')
    script.src = src
    script.onload = () =>callback(script)
    document.head.append(script)
}
loadscript('https://cdn.harry.com',(Script) => {
    alert("script is loaded")
    alert('script.src')
});

// callback
function loadscript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => {
        console.log("Script loaded" + src);
        callback(src);
    };
    script.onerror = () => {
        console.log("Script not loaded");
    }
    document.body.append(script);

}
function hello(){
    console.log("Hello" + src);
}   
function goodmorning(){
    console.log("Good Morning" + src);
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js",hello);

loadscript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js",goodmorning);