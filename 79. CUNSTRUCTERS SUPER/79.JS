class employee{
    login(){
        console.log(`Employee Has logged in`)
    }
    logout(){
        console.log(`Employee Has logged out`)
        
    }
    ReqquestLeave(leaves){
        console.log(`Employee Has Requested ${leaves} leave`)

    }
}

class Programmer extends employee {
    ReqquestCoffee(){
        super.ReqquestLeave();  //isse hum call kar sakte hai employee ke code ko jisse neeche wale ccccccccode ki jaruarat nahi padegi
        // console.log(`Employee has requested for ${x} coffees`)
    }
}
let e = new employee()   //programmers bhi use kar skata hu kyunki maine extends kiya hai employye ko programmer me === Jai hind jai bharat
e.login()
e.ReqquestLeave(3)