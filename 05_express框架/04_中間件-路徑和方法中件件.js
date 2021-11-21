meconst express = require('express')

const app = express();

app.use((req, res, next) => {
  console.log("common middleware");
  next();
})

// 路徑和方法配對的中間件
app.get('/home', (req, res, next) => {
  console.log("home path and method middleware")
})

app.post('/login', (req, res, next) => {
  console.log("login path and post method middleware")
})

app.listen(8999, () => {
  console.log('服務器開啟')
})
