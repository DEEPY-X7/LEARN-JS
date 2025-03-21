// Let's create a clock using JavaScript's setInterval method.

function updateClock() {
    let d = new Date();
    let h = d.getHours().toString().padStart(2, '0'); // Ensure two digits
    let m = d.getMinutes().toString().padStart(2, '0'); // Ensure two digits
    let s = d.getSeconds().toString().padStart(2, '0'); // Ensure two digits
    let time = h + ":" + m + ":" + s;
    console.log(time); // Display the current time in the console
}

// Update the clock every second
setInterval(updateClock, 1000);