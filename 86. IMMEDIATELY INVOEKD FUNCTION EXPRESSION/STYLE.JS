let a = ()=>{
    return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(456);
  }, 4000);
});
let z = async (a) => {
  let b = await a();
  console.log(b)
  let c = await a();
  console.log(c)
  let d = await a();
  console.log(d);
};
z();

}



//IIFS jo hai vo (function se shuru hota hai joki execut nahi karna padta hai lets see )

(function async (a)) => {
    let b = await a();
    console.log(b)
    let c = await a();
    console.log(c)
    let d = await a();
    console.log(d);
}();
  
  //like this
  //aur ye  global variables ki vajah se affected bhi nahi hot hai
  