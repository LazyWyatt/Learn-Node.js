const http = require('http');
const url = require('url');
const qs = require('querystring');

// 1.創建server的兩種方式
const server1 = http.createServer((req, res) => {
  // 回應結果
  res.write("回應結果一")
  res.end();
})


server1.listen(8999, '0.0.0.0' ,() => {
  console.log('server1啟動成功')
})

