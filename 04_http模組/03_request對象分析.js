const http = require('http');

// 1.創建server的兩種方式
const server1 = http.createServer((req, res) => {
  // request物件中風裝了客戶端給我們服務器端傳送過來的所有訊息。
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)

  res.end("Server1")
})


server1.listen(8999, '0.0.0.0' ,() => {
  console.log('server1啟動成功')
})

