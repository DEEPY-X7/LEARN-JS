
//MY SOLVED QUESTIONS

//q.no. - 1  what will the following print in Javascrpt = Console.log(" har\" length)                               
let a = " har\' length"
console.log(a)
//solved

//q.no. - 2  Expbre the includes, startsWith & endsWith funections of a string
console.log(a.includes)
console.log(a.startsWith)
console.log(a.endsWith)
//solved

//q.no. - 3  Write a program to convert a given string in lowercase
let b = "UPPERCASE TO LOWERCASE"
console.log(b.toLowerCase)
//solved

//q.no. -4 Extrart the amount out of this String 1 Please give Rs 1000"
let c = "1 please give RS 1000"
console.log(c.length)
console.log(c.slice(17))  

//q.no. 5 Try to change 4h character of a given string Were you able to do it ?
console.log(a.concat(c + ' deepu '))
//solved


//LETS COMPARE WITH CHATGPT


// CHATGPT SOLVED

//q.no. - 1  what will the following print in JavaScript = Console.log(" har\" length)                               
console.log(" har\" length");  
//solved   - CHATGPT NE GALAT DIYA HAI 

//q.no. - 2  Explore the includes, startsWith & endsWith functions of a string
let a = " har' length";
console.log(a.includes("har"));  // true
console.log(a.startsWith("har")); // false (kyunki starting me space hai)
console.log(a.endsWith("length")); // true
//solved   

//q.no. - 3  Write a program to convert a given string in lowercase
let b = "UPPERCASE TO LOWERCASE";
console.log(b.toLowerCase());  
//solved

//q.no. - 4 Extract the amount out of this String "1 Please give Rs 1000"
let c = "1 Please give Rs 1000";
console.log(c.length);
console.log(c.match(/\d+/)[0]);  // Yeh 1000 extract karega
//solved   YE BHI GALAT HAI CHATGPT KA

//q.no. - 5 Try to change 4th character of a given string. Were you able to do it?
let d = "Deepanshu";
let newD = d.substring(0, 3) + 'X' + d.substring(4); // 4th character replace kar diya
console.log(newD);  
//solved STRING IS IMMUTEBLE NAYA NAHI BANANA THA YE BHI GALAT HAI CHATGPT KA

