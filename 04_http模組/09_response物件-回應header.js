const http = require('http');
const url = require('url');
const qs = require('querystring');

// 1.創建server的兩種方式
const server1 = http.createServer((req, res) => {

  // 設置回應header
  // 方式一: 直接給屬性賦
  // res.setHeader("content-Type", "text/plain;charset=utf8");
  // res.writeHead(200, {
  //   "Content-Type": "text/plain;charset=utf8"
  // })
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8"
  })
  // res.end("回應結果")
  res.end("<h2>Hello Server</h2>");
})

server1.listen(8999, '0.0.0.0' ,() => {
  console.log('server1啟動成功')
})
