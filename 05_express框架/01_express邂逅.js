const express = require('express');

// express其實是一個函數: createApplication
// 返回app
const app = express()

// 監聽默認路徑
app.get('/', (req, res, next) => {
  res.end("Hello Express")
})
app.post('/', (req, res, next) => {
  res.end("Hello POST Express")
})

app.post('/login', (req, res, next) => {
  res.end("Welcome Back!")
})

// 開啟監聽
app.listen(8999, () => {
  console.log("express服務器初體驗")
})