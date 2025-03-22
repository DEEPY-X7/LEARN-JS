// Date: 10/10/2021
// Creator: Deepu yadav
// Description: Attachng multiple Handler to a promise

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1');
    }, 2000);
});
p1.then((data)=>{
    console.log('Congratulations This promise now resolved with data:',data);
    return data;
});p1.catch(()=>{
    alert("Dear Deepu, This is the second handler attached to the promise");
    return data;
})