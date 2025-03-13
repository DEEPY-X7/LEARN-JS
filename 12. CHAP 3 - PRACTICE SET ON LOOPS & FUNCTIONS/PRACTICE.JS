// QUESTION NO. 1
let obj = {
    harry : 98,
    rohan : 70,
    akash : 7,
     }
    
    // for (obj = 0; obj < 100; index++) {
    //     const element = [obj];
    //     console.log(obj)
    // }

    for (let i=0;i<Object.keys(obj).length;i++){
        console.log("the marks of " + Object.keys(obj)[i] + " is "  + obj[Object.keys(obj)[i]])
    }
    
    // //Q. NO. - 2
    
    // for (const obj in object) {
        //     if (Object.prototype.hasOwnProperty.call(object, obj)) {
    //         const element = object[obj];
            
    //     }
    // }
    
        for (let deepu in obj){
            console.log("the marks of " + deepu + " are " + obj[deepu])
            // console.log("the marks of " + Object.keys(obj)[i] + " is "  + obj[Object.keys(obj)[i]])
        }
    
    // // Q. NO. - 3
    
    let cn = 4;
    let i ;
    while (i != cn) {
        i = prompt("Enter the number")
        if (i !==cn) {
            console.log("Enter the correct number")
        }
    }
    console.log("you have entered a correct number")

    // Q. NO. 4

    const mean = (a,b,c,d)=>{
        return(a + b + c + d)/4
    }
    console.log{mean(4,5,6,7,)}