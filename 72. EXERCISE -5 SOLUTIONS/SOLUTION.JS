let  a = [                        //Define a array
    "Initializing Hack tool",
    "Connectiing to Facebook",
    "connecting to the Server",
    "connnected successfully",
    "Usernamea a am deepu",
    "try Brute Forcing",
    "200K Password Tries",
    "Match Not found"
]
const sleep = async (second)=>{   //arrow async  function 
    return new Promise((resolve,reject)=>{   // making a promise
        setTimeout(()=>{resolve(true),second = 1000})  // 1 sec me resolv1e true 
    })
}

const showHack = async(massage)=>{  //making a function
    sleep(2)                        //=!
    console.log(massage)
}
(async()=> {
    for (let i = 0; i < array.length; i++) {
        await showHack[i];
        
    }
})()