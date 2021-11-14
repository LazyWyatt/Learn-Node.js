const http = require('http');
const url = require('url');
const qs = require('querystring');

// 1.創建server的兩種方式
const server1 = http.createServer((req, res) => {
  
  // 最基本的使用方式
  // console.log(req.url)
  // if (req.url === '/login') {
  //   res.end('歡迎回來')
  // } else if (req.url === '/users') {
  //   res.end('用戶列表')
  // } else {
  //   res.end("錯誤請求")
  // }

  //透過url模組解析
  // console.log(url.parse(req.url))
  //'/login?username=wyatt&password=1234'
  const { pathname, query } = url.parse(req.url);
  if (pathname === '/login') {
    console.log(query);
    console.log(qs.parse(query))
    const { username, password } = qs.parse(query);
    console.log(username, password)
    res.end("請求的結果")
  }
  // res.end("Server1")
})


server1.listen(8999, '0.0.0.0' ,() => {
  console.log('server1啟動成功')
})

