


// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("resove after 2 seconds")
//     },2000)
// })
// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("promise 2")
//         }, 2000);
//     })
//     return p2
// })
// .then((value)=>{
//     console.log("We are done")
//     return 2
// }).then((value)=>{
//     console.log("Now We are pakka Done")
// })


const loadscript = () =>{
    return new Promise((resolve, reject) =>{
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            resolve("Script has loaded successfully !!! SIR")
        }
        script.onerror =()=>{reject(0)}
    })
}

let p1 = loadscript("http://localhost:3000/index/index.js")
p1.then((value)=>{
    console.log(value)
})
.catch((Error)=>{
    console.log("We are sorry but We are having problem to loading this script")
}).then((value)=>{
    console.log("Second script is done")
}).catch((Error)=>{
    console.log("Second script is not loaded")
})
// let p2 = loadscript("http://localhost:3000/index/index.js")