const http = require('http');

// 創建一個服務器
const server = http.createServer((req, res) => {
  res.end("Hello Server!")
  res.end("服務器的處理函數被調用")
  // res.write("Hello Server");
  // res.close()
});

// 啟動一個服務器，指定port號與主機。
server.listen(8999, '0.0.0.0', () => {
  console.log("服務器啟動成功")
})