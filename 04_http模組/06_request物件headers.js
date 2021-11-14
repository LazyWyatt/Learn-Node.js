const http = require('http');
const url = require('url');
const qs = require('querystring');

// 1.創建server的兩種方式
const server1 = http.createServer((req, res) => {
  console.log(req.headers)

  req.on('data', (data) => {
    
  })

  res.end("Server1")
})


server1.listen(8999, '0.0.0.0' ,() => {
  console.log('server1啟動成功')
})

