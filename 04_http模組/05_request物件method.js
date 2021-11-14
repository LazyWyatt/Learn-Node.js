const http = require('http');
const url = require('url');
const qs = require('querystring');

// 1.創建server的兩種方式
const server1 = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if ( pathname === '/login') {
    // console.log(req.method)
    if (req.method === 'POST') {
      // 拿到body裡的資料
      // console.log(req.body) // undefined
      req.setEncoding('utf-8'); //設定後就不用toString，只要獲得的資料是字串的
      req.on('data', (data) => {
        // console.log(data) //2進制 Buffer
        // console.log(data.toString());
        const { username, password } = JSON.parse(data);
        console.log(username, password)
      })

      res.end("Server1")
    }
  }
})


server1.listen(8999, '0.0.0.0' ,() => {
  console.log('server1啟動成功')
})

