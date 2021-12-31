const Koa = require('koa')

const userRouter = require('./router/user')

const app = new Koa()

// use註冊中間件
// app.use((ctx, next) => {})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(8999, () => {
  console.log('koa初體驗服務器啟動成功~')
})
