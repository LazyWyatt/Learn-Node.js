const express = require('express')

const app = express();

/*
app.use((req, res, next) => {
  if (req.headers["content-type"] === 'application/json') {
    req.on('data', (data) => {
      const info = JSON.parse(data.toString());
      req.body = info;
    })

    req.on('end', () => {
      next();
    })
  } else {
    next();
  }
})
*/

// body-parser: express3.x 內置express框架
// body-parser: express4.x 被分離出去
// body-parser類似功能: express4.16.x 內製成函數 
app.use(express.json());
// extended
// true: urlencoded進行解析時, 他使用的是第三方庫:qs
// false: 那麼對urlencoded進行解析時, 他使用的是node的內置模塊: querystring
app.use(express.urlencoded({extended: true}));

app.post('/login', (req, res, next) => {
  console.log("login path and post method middleware")
  req.on('data', (data) => {
    console.log(data.toString());
  })

  req.on('end', () => {
    res.end("Wyatt, welcome back~");
  })
})

app.post('/products', (req, res, next) => {
  console.log(req.body);
  res.end("這是您的商品內容");
})

app.listen(8999, () => {
  console.log('服務器開啟')
})
