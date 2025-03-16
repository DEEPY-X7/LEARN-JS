/*
WRITE A JAVASCRIPT PROGRAM TO GENRATE A RANDOM NUMBER AND STORE IT IN A VAIABLE THE PROGRAM THEN TAKES AN INPUT FROM THE USER TO TELL THEM WHETHER THE GUESS WAS CORRECT GRREATES OR LOOER THAN TH ORIGINAL NUMBER 
100 - (NO. OF GUESSES)IS THE SCORE OF THE USER THE PRGRAM IS THE EXPEXTED TO TERMINATE ONCE THE NUMBER IS GUESSES NUMBER SHOULD BE BETWEEN 1 - 100.
*/
// 

// 1️⃣ Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// 2️⃣ Variable to keep track of attempts
let attempts = 0;  
let userGuess = null;  

// 3️⃣ Keep looping until the user guesses correctly
while (userGuess !== randomNumber) {
    // 4️⃣ Get user input
    userGuess = Number(prompt("Guess a number between 1 and 100:"));  
    attempts++;  // Increase the attempt count

    // 5️⃣ Check if the guess is correct
    if (userGuess === randomNumber) {
        console.log(`🎉 Congratulations! You guessed the correct number (${randomNumber}).`);
        console.log(`Your score: ${100 - attempts}`);
        break; // Exit the loop
    } else if (userGuess < randomNumber) {
        console.log("Oh no! You guessed a smaller number, try again.");
        console.log(`The random number is ${randomNumber} `)
    } else {
        console.log("Oh no! You guessed a larger number, try again.");
        console.log(`The random number is ${randomNumber} `)
    }
}