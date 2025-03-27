class Animal {     
    constructor(Name,Color,) {  
        this.Name = name;
        this.Color = Color;
    }
    run(){
        console.log(this.name +" is shouting!")
    }
    shout(){
    console.log(this.Color +" is shouting!")

}
};
 class Monkey extends Animal{
    constructor(name, Color,){

 }
}

let ani = new Animal("Bruno", "White")
let m = new Monkey("Chimpu", "Orange")
ani.shout();
m.eatbanana()
m.hide();