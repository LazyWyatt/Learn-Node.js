const Koa = require('koa')

const app = new Koa()

// use註冊中間件
app.use((ctx, next) => {
  // console.log('中間件被執行')
  if (ctx.request.url === '/login') {
    if (ctx.request.method === 'GET') {
      ctx.response.body = 'Login Success'
    }
  } else {
    ctx.response.body = 'Hello world'
  }
})

// 沒有提供以下幾種方式
// methods方式: app.get()
// path方式: app.use('/home', (ctx, next) => {})
// 連續註冊中間鍵的方式: app.use((ctx, next) => {
// }, (ctx, next) => {
// })
app.listen(8999, () => {
  console.log('koa初體驗服務器啟動成功~')
})
