

/*
create a javascript program capable of genrqating a password which is contains atleast lowercase , one uppercase and one special character create a password class to achieve the same

class password ke andar
genrateStrongPassword,
GenrateWeakPassword,
genrateSuperAdvancePassword,
FunnyPassword


extra addation in my own side 
mai soch raha hu ki in sab in sabhi passworsds ki alag se API array banaun aur call karlu main.js  me call karlu
 */


//function  for strong random password Genrator

// Password class
type PasswordType = "weak" | "strong" | "super_advanced" | "funny";

class Password {
  static generateStrongPassword() {
    return (
      Password.getRandomLower() +
      Password.getRandomUpper() +
      Password.getRandomNumber() +
      Password.getRandomSymbol() +
      Math.random().toString(36).slice(-6)
    );
  }

  static generateWeakPassword() {
    return Math.random().toString(36).slice(-8);
  }

  static generateSuperAdvancePassword() {
    return (
      Password.getRandomUpper() +
      Password.getRandomLower() +
      Password.getRandomNumber() +
      Password.getRandomSymbol() +
      Password.getRandomUpper() +
      Password.getRandomLower() +
      Password.getRandomNumber() +
      Password.getRandomSymbol()
    );
  }

  static generateFunnyPassword() {
    const funnyWords = [
      "ILoveJS!",
      "Passw0rd$",
      "H@ckMeIfYouCan",
      "123Go!",
      "NoMorePasswords!"
    ];
    return funnyWords[Math.floor(Math.random() * funnyWords.length)];
  }

  static getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  static getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  static getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  static getRandomSymbol() {
    const symbols = "!@#$%^&*()_+{}[]<>?/";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
}

// API-like structure
const passwordAPI = {
  weak: () => Password.generateWeakPassword(),
  strong: () => Password.generateStrongPassword(),
  super_advanced: () => Password.generateSuperAdvancePassword(),
  funny: () => Password.generateFunnyPassword()
};

// Main.js ke liye Example Call
document.addEventListener("DOMContentLoaded", () => {
  console.log("Weak Password: ", passwordAPI.weak());
  console.log("Strong Password: ", passwordAPI.strong());
  console.log("Super Advanced Password: ", passwordAPI.super_advanced());
  console.log("Funny Password: ", passwordAPI.funny());
});
