// THE ERROR OBJECT
try{
    hey; 
}catch(err){
    alert(err.name)
    alert(err.massage)
    alert(err.stack)
}
//throw custom erroe
let age;
if (age > 180) {
    throw new Error("invalid age");

    
}let Error = new SyntaxError("invalid syntax");
//                   ||
new ReferenceError("invalid reference");