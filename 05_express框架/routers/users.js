/*
  所有用戶: get /users
  請求所有的某個用戶的資料: get /users/:id
  新增某個用戶的資料: post /users body {username: , password: }
  刪除某個用戶資料: delete /users/:id
  更新某個用戶資料: put /users/:id {nickname: }
*/

const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.json(['wyatt', 'Wayne', 'Emma'])
})

router.get('/:id', (req, res, next) => {
  res.json(`${req.params.id}的資料`)
})

router.post('/', (req, res, next) => {
  res.json('create user success')
})

module.exports = router
