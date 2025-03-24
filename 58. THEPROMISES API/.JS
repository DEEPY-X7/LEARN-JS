let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('value1');
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('value2');
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('value3');
    }, 3000);
});
// p1.then((value) => {
//     console.log(value);
//     return p2;
// }).then((value) => {
//     console.log(value);
//     return p3;
// }).then((value) => {
//     console.log(value);
// });

// //promise all
// Promise.all([p1, p2, p3]).then((values) => {  
//     console.log(values);
// });//["value1", "value2", "value3"]

// //promise.allSettled
// Promise.allSettled([p1, p2, p3]).then((values) => {
//     console.log(values);
// }); //

// //promise.race
// Promise.race([p1, p2, p3]).then((value) => {
//     console.log(value);
// });
// //value1

//promise.any
Promise.any([p1, p2, p3]).then((value) => {
    console.log(value);
});
//value1

//promise.resolve
let p4 = Promise
    .resolve('value4')
    .then((value) => {
        console.log(value);
    });

//promise.reject
let p5 = Promise
    .reject('value5')
    .catch((value) => {
        console.log(value);
    });