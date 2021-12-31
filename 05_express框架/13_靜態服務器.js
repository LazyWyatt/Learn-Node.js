const express = require('express')
const app = express()

app.use(express.static('./build'))

// 開啟監聽
app.listen(8999, () => {
  console.log('router伺服器啟動成功')
})
