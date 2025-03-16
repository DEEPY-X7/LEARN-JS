let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
delete num[0]
console.log(num);
// Output: [empty, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let num3 = num.concat(num2);
console.log(num3)

let num4 = [837, 84, 73, 75, 37, 94, 10, 92,82, 84, 10];
num4.sort()
console.log(num4)  // output :- 10,10,37,73,75,82,84,84,837,92,94

let compare = (a, b)=>{
    return b - a 
}
num.sort(compare)
console.log(num)

num.reverse()
console.log(num)

let num5 = [551,22,3,14,5,6,7,8,229]
let deletedvalues = num5.splice(2,4,1021,1022,1023 , 1024, 1025)
console.log(num5)
console.log(deletedvalues)

let newnum6 = num5.splice(3)
console.log(newnum6)
