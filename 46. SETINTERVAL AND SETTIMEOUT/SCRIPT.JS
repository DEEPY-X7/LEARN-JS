document.write("Hello World");

let a = setTimeout(function() {
    alert("Hello World");
    }, 3000);

let sum = (a, b) => {
    console.log("yes i am working")
    return a + b;}

    setTimeout(function() {
        sum(2, 3);
        console.log(sum(2, 3))
        }, 3000);

    let b = prompt("do you want to run the settimeout?/ yes or no");
    if(b == "no") {
        clearTimeout(a)
    }else if(b == "yes") {
        alert("The settimeout will run in 3 seconds")
        console.log(a)
       
    } else {
        alert("Please enter a valid input")
        clearTimeout(a) 
    }

   