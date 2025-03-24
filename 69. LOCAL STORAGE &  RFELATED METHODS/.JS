//Local Storage
localStorage.setItem(key, value) // Data store karne ke liye
localStorage.getItem(key) //→ Data retrieve karne ke liye
localStorage.removeItem(key) //→ Specific item delete karne ke liye
localStorage.clear() //→ Pura local storage clear karne ke liye



//reflect storage
let obj = {name:"deepanshu" , age : 17};
Reflect.set = {name, age: 100 };

console.log(obj.age);
console.log(Reflect.get(obj.age));
console.log(Reflect.has(obj.age));
console.log(Reflect.deleteProperty(obj.age));
console.log(obj)