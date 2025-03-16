let  marks_class_12 = [90, 95, 85, 100, 80, 75, 70, 65, 60, 55,"not-present"];
console.log(marks_class_12);
console.log(marks_class_12[0]); //90
console.log(marks_class_12[1]); //95
console.log(marks_class_12[2]); //85
console.log(marks_class_12[3]); //100
console.log(marks_class_12[4]); //80
console.log(marks_class_12[5]); //75
console.log(marks_class_12[6]); //70
console.log(marks_class_12[7]); //65
console.log(marks_class_12[8]);  //60
console.log(marks_class_12[9]); //55
console.log(marks_class_12[10]); //not present
console.log(marks_class_12[11]); //not present
console.log("the length of marks_class_12 is",marks_class_12.length);
marks_class_12[10] = 50; //change the value of 10th element
console.log(marks_class_12); // print the array
console.log(typeof marks_class_12); //object

//quickquiz - for loop me print karna hai 
for(let i=0; i<marks_class_12.length; i++){
    console.log(marks_class_12[i]);
}
// Output: 90 95 85 100 80 75 70 65 60 50 not-present



let fruit = ['apple', 'banana', 'orange', 'strawberry', 'kiwi'];  //array of fruits
let fruit2 = ['pear', 'peach', 'grape', 'watermelon', 'mango'];  //array of fruits
let allFruit = fruit.concat(fruit2);    //concatenating two arrays
console.log(allFruit);  
// Output: ["apple", "banana", "orange", "strawberry", "kiwi", "pear", "peach", "grape", "watermelon", "mango", "blueberry", "blackberry", "raspberry", "cherry", "plum", "pineapple", "coconut", "papaya", "lychee", "guava"]
