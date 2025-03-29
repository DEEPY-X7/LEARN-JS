class Animal {
  constructor(name) {
    this.name = name
  }
  walk(){
    alert(Animal + Animal.capitlize(this.name) + "is walking");
  }
  static capitlize(){
    return this.name.charAt(0).toUpperCase() + this.name.substr(1, this.name.length)
  }
}

j = new Animal(Animal.capitlize("jack"));
j.walk();
console.log(j.capitlize("thisa"))  //nahi chalega ye