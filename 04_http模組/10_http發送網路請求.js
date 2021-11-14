const http = require('http');

// http發送get請求,從其他服務器拿資源

// http.get('http://localhost:8999', res => {
//   res.on('data', data => {
//     console.log(data.toString())
//   })

//   res.on('end', () => {
//     console.log('得到所有結果')
//   })
// })


// http發送post請求
const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8999,
}, res => {
    res.on('data', data => {
      console.log(data.toString())
    })
  
    res.on('end', () => {
      console.log('得到所有結果')
    })
})

req.end()