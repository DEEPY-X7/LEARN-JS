let a = prompt("Hey, what's your age?");

if (a !== null && a.trim() !== "") { 
  a = Number(a); // Convert input to number

  if (!isNaN(a) && a > 0 && Number.isFinite(a)) { 
    alert("You are " + a + " years old");
  } else {
    alert("Please enter a valid age!"); 
  }
} else {
  alert("Input cannot be empty!");
}
