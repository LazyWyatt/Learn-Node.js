const express = require('express')
const userRouter = require('./routers/users')
const productRouter = require('./routers/products')
const app = express()

app.use('/users', userRouter)
app.use('/products', productRouter)

// 開啟監聽
app.listen(8999, () => {
  console.log('router伺服器啟動成功')
})
