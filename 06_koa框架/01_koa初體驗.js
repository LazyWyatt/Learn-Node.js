const Koa = require('koa')

const app = new Koa()

// next 其實是 dispatch
// ctx 其實是 context
app.use((ctx, next) => {
  // console.log('中間件被執行')
  ctx.response.body = 'Hello world'
})

app.listen(8999, () => {
  console.log('koa初體驗服務器啟動成功~')
})
