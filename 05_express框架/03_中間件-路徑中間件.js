const express = require('express')


const app = express()

app.use((req, res, next) => {
  console.log('common middle ware01')
  next()
})

app.use('home', (req, res, next) => {
  console.log('home middleware')
  next()
})

app.use((req, res, next) => {
  console.log('common middleware2')
})

app.listen(8999, () => { 
  console.log("express success build")
})
