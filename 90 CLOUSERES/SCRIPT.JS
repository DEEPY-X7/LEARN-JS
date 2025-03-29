function Hello1() {
  massage = "Good Morining";
  {
    massage = "Good Afternoon"; //print ye hoga  kyunki ye ghar ka bachha hai iski ijjat jayada
    console.log("Hello 1 " + massage);
  }
  console.log(massage);
  let c = function Hello2(){
    console.log("I am c" + massage)
  }
  return c;
}
Hello1();
c();

