//ARRAY METHOS

//1. concat() - Joins two or more arrays, and returns a copy of the joined arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3); // expected output: Array ["a", "b", "c", "d", "e", "f"]

//2. copyWithin() - Copies array elements within the array, to and from specified positions
const array4 = ['a', 'b', 'c', 'd', 'e'];
// copy to index 0 the element at index 3
console.log(array4.copyWithin(0, 3, 4)); // expected output: Array ["d", "b", "c", "d", "e"]

//3. TOSTRING() - Converts an array to a string, and returns the result
let array5 = [1, 2, 'a', '1a'];
console.log(array5); // without toString() expected output: Array [1, 2, "a", "1a"]
console.log(array5.toString()); // expected output: "1,2,a,1a"

//4. JOIN() - Joins all elements of an array into a string
let array6 = ['Wind', 'Rain', 'Fire'];
console.log(array6.join(' - ')); // expected output: "Wind - Rain - Fire"

//5. POP() - Removes the last element of an array, and returns that element
let array7 = [1, 2, 3];
console.log(array7.pop()); // expected output: 3
console.log(array7); // expected output: Array [1, 2]

//6. PUSH() - Adds new elements to the end of an array, and returns the new length
let array8 = [1, 2, 3];
console.log(array8.push(4,5)); //expected output: 5
console.log(array8); // expected output array [1,2,3,4,5]

//7. SHIFT() - Removes the first element of an array, and returns that element
let array9 = [1,2,3];
console.log(array9.shift()); // expected output: 1
console.log(array9); //Expected output: Array [2,3]

//8. UNSHIFT() - Adds new elements to the beggining of an array, and return the new length
let array10 = [1,2,3];
console.log(array10.unshift(4,5)); // expected output: 5
console.log(array10); //expected output: Array [4,5,1,2,3]

//9. DELETE - Deletes the element at index i
let array11 = [1,2,3,4,5];
delete array11[2];
console.log(array11); // expected output: Array [1,2,undefined,4,5]

//10. SHORT - Sorts the elements of an array
let array12 = [1, 30, 4, 21];
console.log(array12.sort()); // expected output: Array [1, 21, 30, 4]

//11. SPLICE - Adds/Removes elements from an array
let array13 = [1,2,3,4,5];
array13.splice(2,0,6,7);
console.log(array13); // expected output: Array [1,2,6,7,3,4,5]

//12. SLICE - Selects a part of an array, and returns the new array
let array14 = [1,2,3,4,5];
let array15 = array14.slice(2);
console.log(array15); // expected output: Array [3,4,5]

//13. REVERSE - Reverses the order of the elements in an array
let array16 = [1,2,3,4,5];
console.log(array16.reverse()); // expected output: Array [5,4,3,2,1]