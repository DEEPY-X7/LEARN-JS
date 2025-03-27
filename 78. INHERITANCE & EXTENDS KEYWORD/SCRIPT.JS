class Superhero {
    constructor(name, powerLevel) {
        this.name = name;
        this.powerLevel = powerLevel;
    }

    showPower() {
        console.log(`${this.name} has a power level of ${this.powerLevel}`);
    }
}

class IronMan extends Superhero {
    constructor(name, powerLevel, suit) {
        super(name, powerLevel);  // Calling parent class constructor
        this.suit = suit;
    }

    fly() {
        console.log(`${this.name} is flying using the ${this.suit} suit!`);
    }
}
class SpiderMan extends Superhero {
    constructor(name, powerLevel, webType) {
        super(name, powerLevel);
        this.webType = webType;
    }

    swing() {
        console.log(`${this.name} is swinging using ${this.webType} web!`);
    }
}
const ironMan = new IronMan("Tony Stark", 95, "Mark 85");
const spiderMan = new SpiderMan("Peter Parker", 80, "Organic Web");

ironMan.showPower();  // Tony Stark has a power level of 95
ironMan.fly();        // Tony Stark is flying using the Mark 85 suit!

spiderMan.showPower(); // Peter Parker has a power level of 80
spiderMan.swing();     // Peter Parker is swinging using Organic Web!
