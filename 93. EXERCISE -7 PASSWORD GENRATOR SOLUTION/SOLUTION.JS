class password {
  constructor() {
    console.log("Welcome To Password Genrator");
  }
  GenratePassword(len) {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "1234567890";
    let special = "!@#$%^&*()_-+";
    if (len < 3) {
      console.log("Your Password should be atleast 3 character long");
    } else {
      let i = 0;
      while (i < len) {
        this.pass += chars[Math.floor(Math.random()(chars.length) * chars.length)]
        this.pass += numbers[Math.floor(Math.random()(numbers.length) * numbers.length)]
        this.pass += special[Math.floor(Math.random()(special.length) * special.length)]
        i+=3
      }
      this.pass = this.pass.subster(0, len)
      return this.password
    }
  }
}

let p = new password();
console.log(p.GenratePassword(7))