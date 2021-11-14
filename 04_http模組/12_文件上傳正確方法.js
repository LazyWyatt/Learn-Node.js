const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  if (req.url === '/upload') {
    if (req.method === 'POST') {

      req.setEncoding('binary')
      
      let body =  '';
      const totalBoundary = req.headers["content-type"].split(';')[1]
      const boundary = totalBoundary.split('=')[1];
      
      req.on('data', (data) => {
        body += data;
      })
      
      req.on('end', ()=> {
        console.log(body.substring(0, 100))
        // 處理body
        // 前後的boundary+前面的資訊+兩個空格移除
        // 1.獲得image/png的位置
        let payload = qs.parse(body, "\r\n", ": ")
        const type = payload["Content-Type"]

        // 2.在image/png的位置擷取
        const typeIndex = body.indexOf(type)
        const typeLength = type.length
        let imageData = body.substring( typeIndex + typeLength)

        // 3.將中間的兩個空格去掉
        imageData = imageData.replace(/^\s\s*/, '');

        // 4.將最後的boundary去除
        imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))
        // console.log(imageData)
        fs.writeFile('./foo.png', imageData, 'binary', err => {
          res.end('文件上傳成功')
        })
      })
    }
  }
})

server.listen(8999, ()=> {
  console.log('文件上傳服務器開啟成功');
})