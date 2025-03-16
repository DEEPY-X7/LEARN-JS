// // WRITE A PROGRAM USING PROMPT TO TAKE INPUT OF AGE AS A VALUE FROM THE USER  AND USE ALERT TO TELL HIM IF HE CAN DRIVE

// // let age = prompt("Enter your age: ");
// // if(age>18){
// //     alert("You are eligible to drive");
// // }
// // else{
// //     alert("You are not eligible to drive");
// // }

// //in Q1 use confirm to ask the user if he want to see the prompt again
// // age = prompt("Enter your age: ");
// // if(age>18){
// //         alert("You are eligible to drive");
// //     }
// //     else{
// //         alert("You are not eligible to drive");
// //     }
// // let CONFIRM = confirm("Do you want to see the prompt again?")
// // if(CONFIRM < 18){
// //     if(age>18){
// //         alert("You are eligible to drive");
// //     }
// //     else{
// //         alert("You are not eligible to drive");
// //     }
// // }


// //in the previuous question use the console.error if the age enterd negative
// age = prompt("Enter your age: ");
// age = Number.parseInt(age);
// if(age>18){
//         alert("You are eligible to drive");
//     }
//     else{
//         alert("You are not eligible to drive");
//     }
// let CONFIRM = confirm("Do you want to see the prompt again?")
// if(CONFIRM){
//     if(CONFIRM < 18){
//         age = prompt("Enter your age: ");
//         alert("You are eligible to drive");
//     }
//     else{
//         alert(" You Have Lost your chance!");
//     }
// }
// let err = console("Age is not in minus");
//     if (err < 0){
//         console.alert("Age is not in minus");{
        
//     }
// }


//

let age = prompt("Enter your age: ");
let runAgain = true;
age = Number.parseInt(age);

function canDrive(age){
    return age>=18?true:false;
}
if(canDrive(age)){
    alert("You are eligible to drive");
}if(age<0){
    console.error("Age is not in minus");
} if(age>4){
    location.href = "https://www.google.com";
}
else{
    alert("You are not eligible to drive");
}
while(runAgain){
    runAgain = confirm("Do you want to see the prompt again?");
    if(runAgain){
        age = prompt("Enter your age: ");
        age = Number.parseInt(age);
        if(age>=0){
            if(canDrive(age)){
                alert("You are eligible to drive");
            }if(age<0){
                console.error("Age is not in minus");
            } if(age==4){
                location.href = "https://www.google.com";
            }
            }else{
                alert("You are not eligible to drive");
            }
        }
    }

let color = prompt("Enter the color name : ");
document.body.style.backgroundColor = color;
