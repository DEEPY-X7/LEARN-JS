let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert("i am a promise and  i am a fulfield");
        resolve(true);
        reject("i am a promise and your promise is  rejected");
    }, 5000);
});


let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("i am a promise and  i am a rejected");
        reject(new console.error("i am a promise and your promise is  rejected"));
    }, 5000);
});

p1.then((value)=>{
    console.log(value)
});

p2.catch((error)=>{
    console.log(error);
})
