const path = require('path')

const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  } 
})

const upload = multer({
  // dest: './uploads/'
  storage
});

app.use(upload.any());

app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end("用戶取得資料成功。")
})

app.post('/upload', upload.single('file') , (req, res, next) => {
  res.end('文件上傳成功')
})

app.listen(8999, () => {
  console.log('form-data解析服務器成功。')
})