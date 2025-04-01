const express = require('express')
const app = express()
const port = 3000

app.get('/Home', (req, res) => {
  res.send('Hii!')
})
app.get('/about', (req, res) => {
  res.send(' i am deepu')
})
app.get('/contact', (req, res) => {
  res.send('8917001315!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})