const fs = require('fs')

const express = require('express')
const morgan = require('morgan')

const app = express()

const writerStream = fs.createWriteStream('./logs/access.log', {
  flags: 'a+',
})

app.use(morgan('combined', { stream: writerStream }))

app.get('/home', (req, res, next) => {
  res.end('Hello end!')
})

app.listen(8999, () => {
  console.log('form-data解析服務器成功。')
})
