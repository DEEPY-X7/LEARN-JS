const loadscript = asynk (src)=>{
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script")
        script.src = src
        script.onload = ()=>{
          resolve(src+ "done successfully")
        }
        document.head.append(script)
    })
}
//problem number 1
// let a = await loadscript("https://getbootstrap.com/docs/5.3/getting-started/introduction/")
// a.then(value) =>{
//     console.log(value)
// }

// //problem number 2
// const main2 =(){
// let a = await loadscript("https://getbootstrap.com/docs/5.3/getting-started/introduction/")
// console.log(a)
// }main2();
let p = new promise((resolve,reject)=>{
    reject(new console.error("pleasse this is not aceptable");
    )
},3000)
