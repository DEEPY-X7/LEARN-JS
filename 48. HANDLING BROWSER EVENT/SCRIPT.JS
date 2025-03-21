let x = function(event){
    alert("hello deepu mai aapke liye kya kar sakta hu");
    consosel.log(event.type,event.clientx,event.clienty)
    console.log(alert)
}

let y = function(e){
    alert("your data is removed")
    console.log(alert )
}

btn.addEventListener('click',x)
btn.addEventListener('click',y)

let a = prompt("What is your favourite numbr?")
if(a == 2){
    btn.removeEventListener('click',y)
        alert("your data is removed")
        console.log(a)

}


// let btn = document.getElementById('btn')
// btn.addEventListener('click',function(e){
//     alert("hello deepu mai aapke liye kya kar sakta hu");
//     console.log(btn)
// })

// let a = prompt("what is your favorite number");
// if(a ==2){
//     btn.removeEventListener(`click`,function(e){
//         alert("your data is removed")
//         console.log(a)
//     })
// }
