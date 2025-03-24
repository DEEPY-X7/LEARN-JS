async function deepu() {
  let delhiweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 degree celcious");
    }, 2000);
  });

  let bangloreweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 degree celcious");
    }, 5000);
  });
//   delhiweather.then(alert)
//   bangloreweather.then(alert)
console.log("frtching delhi weather please wait")
let delhi = await delhiweather;
console.log("fetched banglore weather is ", + delhi)
console.log("fetching banglore weather please wait")
let banglore = await bangloreweather;
console.log("fetched banglore weather is ", + banglore)
return [delhi,banglore]
}

console.log("Welcome to Weather control room ")
let a = deepu()
console.log(a)