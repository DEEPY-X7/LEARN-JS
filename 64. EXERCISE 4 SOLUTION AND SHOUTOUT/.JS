setTimeout(()=>{
    time.innerHTML = d
    let a = new Date();
    let options ={
        weakday: "long",year:"numeric",month:"short",
        day: "numeric", hour:"2-digit", minute: "2-digit"
    };
    let d = date.tolocaltimestring("eng-us", options)
},1000);