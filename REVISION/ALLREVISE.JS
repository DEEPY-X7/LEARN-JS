let car = {
    brand: "Rolls Roys",
    Price: "$700000",
    details:console.log(`Car name is ${document.create(name = "Rolls Royce")} and ${this.Price} `)
};
car = (name, brand, details) => 






// let person = {
//     name:Deepu,
//     age: 17,

// }
//     let myStudent = Object.create(person)
//     myStudent.create.Object = "Work";













// function Car(startEngine){
//     this.startEngine = startEngine;
//     console.log("Vroom Vroom! Engine Started!");
// }
// Car()
// let Newcar = new Car("Your Car Has Been Stopped! Because of Fule is Empty!")
// Newcar();







// let obj = {
//     luxuryCar: "G-Wagon",
//     Price: "$100000",
//     Brand: "X-Falcon",

//     showDetails: function () {
//         console.log(`Your Car Name is ${this.luxuryCar}`)
//         console.log(`Your Car price is ${this.Price}`)
//         console.log(`Your Car brand is ${this.Brand}`)
//     },
//     startEngine:function () {
//         console.log("Vroom Vroom! Engine Started!")
//     }
// }

// obj.showDetails();
// obj.startEngine();




// let deepuBusiness = {
//     name: "Deepu Enterprises",
//     founder: "Deepu Yadav",
//     netWorth: 100000000,  // in rupees
//     employees: 50,
//     isProfitable: true,
    
//     // Method: Business ka introduction
//     getDetails: function() {
//         console.log(`Business Name: ${this.name}`);
//         console.log(`Founder: ${this.founder}`);
//         console.log(`Net Worth: ₹${this.netWorth}`);
//         console.log(`Total Employees: ${this.employees}`);
//         console.log(`Is Profitable: ${this.isProfitable ? "Yes" : "No"}`);
//     }
// };

// // ✅ Object ka data access karna
// console.log(deepuBusiness.name);  // Output: Deepu Enterprises
// console.log(deepuBusiness["netWorth"]);  // Output: 100000000

// // ✅ Method call karna
// deepuBusiness.getDetails();







// function deepi(price, discount = 0.1) {
//         let discountAmount = price * discount;
//         let finalPrice = price - discount;
//         console.log(`your Total price : ${price} `)
//         console.log(`your Total Discountable price : ${discountAmount} `)
//         console.log(`your Total  finalprice : ${finalPrice} `)
// }
// deepi(1000008790,0.2);
// deepi(1000008790);


// function calculateDiscount(price, discount = 0.1) {
//     let discountAmount = price * discount;
//     let finalPrice = price - discountAmount;

//     console.log(`Original Price: ₹${price}`);
//     console.log(`Discount Applied: ₹${discountAmount}`);
//     console.log(`Final Price: ₹${finalPrice}`);
// }

// // ✅ 20% discount apply hoga
// calculateDiscount(1000000000, 0.2);

// // ✅ Default 10% discount apply hoga
// calculateDiscount(1000000000);







// function CalculateDiscount(Price, Discount = 0.1) {
//     if(Discount == true){console.log("Wow You Win a 10% Discount , Thanks For Perchasing Please Visit Again! ")
// }
// }
// CalculateDiscount(1000000000, 0.2)
// CalculateDiscount(1000000000)




// //Ek arrow function likho jo array of numbers ko double kare aur phir unko console pe print kare. Try karke mujhe code bhejo! 🔥
// let deepu = (a,b) => (a * b);
// console.log(deepu(5,6))





// //  Aapke Liye Challenge
// // "500" ko number me convert karke print karo.
// // 200 ko string me convert karke print karo.
// // 0 aur 1 ko boolean me convert karke print karo.

// let num = ("500");
// console.log(Number(num))

// let n = (200);
// console.log(toString(n))


// let nu = (0);
// console.log(Boolean(nu))

// let nuk = (1);
// console.log(Boolean(nuk))










// console.log("100" + 20);  // "10020"  (Number -> String ban gaya)
// console.log("5" - 2);     // 3  (String -> Number ban gaya)
// console.log("10" * 2);    // 20  (String -> Number ban gaya)
// console.log("10" / "2");  // 5  (String -> Number ban gaya)
// console.log(5 + true);    // 6  (true -> 1 ban gaya)
// console.log(5 + false);   // 5  (false -> 0 ban gaya)




// // let deepu = "Hero";
// // console.log(typeof(deepu))



// // let inputBox = document.createElement("input");
// // inputBox.setAttribute("type", "text");
// // inputBox.setAttribute("placeholder", "Type something & Press Enter...");
// // document.body.appendChild(inputBox);

// inputBox.addEventListener("input", function(event) {
//     if (event.key === "Enter") {
//         alert("You Pressed Enter! 🚀 Your Input: " + inputBox.value);
//     }
// });


// inputBox.addEventListener("reset", function(event) {
//     if (event.key === "Escape") {
//         inputBox.value = "";  // Clear input after submitting
//     }
// });
// document.body.appendChild(inputBox);














// // ✅ Input Box Create Karo
// let inputBox = document.createElement("input");
// inputBox.setAttribute("type", "text");
// inputBox.setAttribute("placeholder", "Type something...");
// document.body.appendChild(inputBox);

// // ✅ Button ka Styling & Event
// let btn = document.getElementById("btn");
// btn.style.backgroundColor = "yellow";

// btn.addEventListener("dblclick", function() {
//     alert("HII Don't dblClick again HAHAHHA! 🤣");
// });

// // ✅ Input Box Event Listener
// inputBox.addEventListener("input", function() {
//     console.log("User typed:", inputBox.value);

//     if (inputBox.value.trim() === "") {  
//         alert("Please Type Something! ❌");
//     } else if (inputBox.value === "Deepu") {  
//         alert("Hello Deepu! 🚀");
//     }
// });

// let clearBTN = document.createElement("button");
// clearBTN.innerText = "Clear Me Baby!"
// clearBTN.addEventListener("click", function(){
//     inputBox.value = "";
// })


// let AddBTN = document.createElement("button");
// AddBTN.innerText = "Add Me Baby!"
// AddBTN.addEventListener("click", function(){
//     console.log(inputBox.value)
// })
// document.body.appendChild(clearBTN);
// document.body.appendChild(AddBTN);


























//input banane me problem ho rahi hai
//input banane me problem ho rahi hai









// let heading = document.getElementById("heading");
// let btn = document.getElementById("btn");

// btn.addEventListener("click", function(){
//     let p = document.createElement("p")
//     p.innerText = "Hllo sir!!!!";

//     document.body.appendChild(p)
// })
// document.body.appendChild(heading)

// let addBtn = document.createElement("button"); // 🔹 Ek "button" banaya
// addBtn.innerText = "Add New Text"; // 🔹 Button ke andar text likha

// // 🔹 Jab button dabega to ek <p> tag create hoga
// addBtn.addEventListener("click", function() {
//     let p = document.createElement("p"); // ✅ Naya <p> element bana
//     p.innerText = "Deepu is learning DOM! 🚀"; // ✅ Text add kiya
//     document.body.appendChild(p); // ✅ Page pe show kiya
// });

// // 🔹 Button ko page pe dikhaya
// document.body.appendChild(addBtn);











// // **Add Button**
// let addBtn = document.createElement("button");
// addBtn.innerText = "Add New Text";

// addBtn.addEventListener("click", function() {
//     let p = document.createElement("p");
//     p.innerText = "Deepu is learning DOM! 🚀";
//     document.body.appendChild(p);
// });

// document.body.appendChild(addBtn);

// // **Remove Button**
// let removeBtn = document.createElement("button");
// removeBtn.innerText = "Remove Last Text";

// removeBtn.addEventListener("click", function() {
//     let allParagraphs = document.querySelectorAll("p");
//     let removeAll = allParagraphs.length;

//     if (removeAll) {
//         removeAll.remove();
//     }
// });

// document.body.appendChild(removeBtn);
















// let btn = document.createElement = ("button")
// btn.innerText = "Add New Text";
// btn.addEventListener("click",function() {
//     let p = document.createElement("p");
//     p.innerHTML = "Deepu is learning Dom";
//     document.body.appendChild(p)
// }) 
// document.body.appendChild(btn)

// let heading = document.getElementById("heading");

// heading.innerText = "Hello deepu!"



// let headingChange = 



// let arr = [10,20,30,]

// let deepu = arr.map(function multiply(x) {
//    return x * 2
// })
// let deep = arr.filter(async (big) => {
//     return await big >= 40;
// })
// let dee = arr.reduce(function sum(x,y) {
//     return x + y
// })
// console.log(deepu);
// console.log(deep)
// console.log(dee)

// function mathOperation(a, b,callback) {
//     let result = callback(a,b)
//     console.log("result:", result);
// }
// function add(x,y) {
//     return x + y;
// }
// function multiply(r,v){
//     return r * y;
// }
// mathOperation(3,5,add)
// mathOperation(2,8,multiply)