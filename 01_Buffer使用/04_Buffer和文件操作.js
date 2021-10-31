const fs = require('fs');
const sharp = require('sharp');
// 讀取文字文件
fs.readFile("./foo.txt", (err, data) => {
  console.log(data.toString());
})

// 讀取圖片文件
fs.readFile("./bar.png", (err, data) => {
  console.log(data)

  fs.writeFile("./foo.png", data, (data,err) => {});
})


// sharp庫的使用
sharp('./bar.png')
  .resize(300, 300)
  .toFile('./baz.png')


sharp('./bar.png')
  .resize(300, 300)
  .toBuffer()
  .then(data => {
    fs.writeFile('./test.png',data , err => console.log(err))
  })
  