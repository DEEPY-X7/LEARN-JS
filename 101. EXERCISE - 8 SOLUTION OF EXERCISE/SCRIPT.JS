let d = new Date();
time.innerHTML = d.toDateString() + " " + d.toDateString()
},1000)

const setAlarm = (second) =>{
    setTimeout(()=>{
        play()
    },seconds* 1000)
} 

let = 5 prompt(`After How many seconds do you want an alarm?`)
setAlarm(parseInt(s))