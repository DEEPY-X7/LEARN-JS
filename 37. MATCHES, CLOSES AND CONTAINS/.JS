let id1 = document.getElementById('id1')
let sp1 = document.createElement('sp1')

console.log(id1)
console.log(id1.matches('.box')) // true
console.log(id1.matches('.class')  )// false

console.log(sp1.closest('#sp1')) // null


console.log(id1.contains(id1)) // true
console.log(id1.contains(id2)) // false

