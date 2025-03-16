//some more Array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Loop through each element of the array
arr.forEach(function (element) {
    console.log(element);
});
// Output: 1 2 3 4 5 6 7 8 9 10

arr.map(function (element) {
    return element * 2;
});
// Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

arr.filter(function (element) {
    return element % 2 === 0;
});
// Output: [2, 4, 6, 8, 10]

arr.reduce(function (accumulator, element) {
    return accumulator + element;
}, 0);
// Output: 55

// arr.from('deepanshu');
// Output: ['d', 'e', 'e', 'p', 'a', 'n', 's', 'h', 'u']

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Output: 1 2 3 4 5 6 7 8 9 10

for (const i in arr) {
    if (arr.prototype.hasOwnProperty.call(arr, i)) {
        const element = arr[i];
        console.log(element);
    }
}