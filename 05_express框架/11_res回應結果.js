const express = require('express')

const app = express()

// http://localhost:8999/products/10
app.get('/products/:id', (req, res, next) => {
  console.log(req.params)
  res.end('資料')
})

// http://localhost:8999/login?username=wyatt&password=123
app.get('/login', (req, res, next) => {
  console.log(req.query)
  // 狀態碼
  res.status(204)
  // res.contentType = 'application/json'
  // res.end(JSON.stringify({ name: 'wyatt', age: 22 }))
  // 資料
  res.json({ name: 'wyatt', age: 22 })
})
/*
  所有用戶: get /users
  請求所有的某個用戶的資料: get /users/:id
  新增某個用戶的資料: post /users body {username: , password: }
  刪除某個用戶資料: delete /users/:id
  更新某個用戶資料: put /users/:id {nickname: }
*/
// 開啟監聽
app.listen(8999, () => {
  console.log('express服務器初體驗')
})
