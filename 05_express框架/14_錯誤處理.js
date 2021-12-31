const express = require('express')
const app = express()

const USERNAME_DOES_NOT_EXIST = 'USERNAME_DOES_NOT_EXIST'
const USERNAME_ALREADY_EXIST = 'USERNAME_ALREADY_EXIST'

app.post('/login', (req, res, next) => {
  const isLogin = false
  if (isLogin) {
    res.json('user login success')
  } else {
    // res.type(400)
    // res.json('username does not exist')
    next(new Error(USERNAME_DOES_NOT_EXIST))
  }
})

app.post('/register', (req, res, next) => {
  const isLogin = true
  if (isLogin) {
    res.json('user register success')
  } else {
    // res.type(400)
    // res.json('username already exist')
    next(new Error(USERNAME_ALREADY_EXIST))
  }
})

app.use((err, req, res, next) => {
  let status = 400
  let message = ''
  switch (err.message) {
    case USERNAME_DOES_NOT_EXIST:
      message = 'username dose not exists~'
      break
    case USERNAME_ALREADY_EXIST:
      message = 'username already exist'
      break
    default:
      message = 'NOT FOUND~'
  }

  res.status(status)
  res.json({
    errCode: status,
    errMessage: message,
  })
})

// 開啟監聽
app.listen(8999, () => {
  console.log('router伺服器啟動成功')
})
