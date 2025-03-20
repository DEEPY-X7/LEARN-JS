let user = prompt("Enter S, W or G")
let cpuI = Math.floor(Math.random()) * 2;
let cpu = ["s", "w", "G"][cpuI]

const match = (cpu, user )=>{
    if(cpu === user)
        return 0;
}else if(cpu ==="S" && user ==="W"){
    return cpu;
    }
match(cpu, user)
