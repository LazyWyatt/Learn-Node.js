const http = require('http');

// 1.創建server的兩種方式
const server1 = http.createServer((req, res) => {
  res.end("Server1")
})


server1.listen(8999, () => {
  console.log('server1啟動成功')
})

// const server2 = http.createServer((req, res) => {
//   res.end("Server2")
// })

const server2 = new http.Server((req, res) => {
  res.end("Server2")
});

server2.listen(8888, () => {
  console.log('server2啟動成功')
})

// 2.監聽方法的使用
const server3 = new http.Server((req, res) => {
  res.end("Server3")
});

server3.listen(() => {
  console.log("server 3啟動成功")
  console.log(server3.address().port)
})
