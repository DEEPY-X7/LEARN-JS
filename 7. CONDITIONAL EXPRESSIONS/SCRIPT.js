
let a = prompt("Hey, what's your age?");

a = Number.parseInt(a);
if(a<0) {
    alert("this is invalid age");
}
else if(a<9){
    alert("you are a kid and don`t think about driving ")
}
else if(a<18 && a>=9){
    alert("you are a kid and you think about driving after 18")
}
else {
    alert("you can now drive as you are above 18");
}

console.log("you are " (a<18?"kid":"adult"));


alert("Prompt chal raha hai ya nahi?"); //pata nahi kyu run nahi ho raha hai  alerts



//homework - explore switch statement and write a basic program using switch statement