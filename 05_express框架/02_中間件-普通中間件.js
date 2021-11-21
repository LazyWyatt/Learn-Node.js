const express = require('express');

const app = express();

// write a normal middleware
// use register a middleware(callback function)
app.use((req, res, next) => {
  console.log("註冊了第一個普通的中間件!")
  res.end("Hello world")
  next()
})

app.use((req, res, next) => {
  console.log("註冊了第一個普通的中間件!02")
  res.end("Hello world")
  next()
})

app.use((req, res, next) => {
  console.log("註冊了第一個普通的中間件!03")
  res.end("Hello world")
})


app.listen(8999, () => {
  console.log('normal middleware')
})