# Learn Node.js
## nvm-window
- https://github.com/coreybutler/nvm-windows
```
nvm list  //列出現有下載的
nvm available //列出可以用的
nvm list available//列出可以用的
nvm install latest //最新版本
nvm install lts //LTS版本
nvm use xx.xx.xx //使用指定版本號
nvm uninstall xx.xx.xx //刪除指定版本node版本
```
## REPL (Read-Eval-Print Loop)
簡單的、可互動的編輯程式語言的環境，可以在上面執行程式。瀏覽器的console可以視為一個REPL。

## Node 傳遞參數
```
//index.js
console.log(process.argv)

//cmd
node index.js wyatt age=23
```
![](https://i.imgur.com/RJJxv18.png)

## Console
```
console.clear()清空
console.trace()追蹤程式執行路徑
```

## Globals
### 特別的全局對象 
不是Node的REPL可以讀取到的，實際上是每一個模組裡面都有的。
- __dirname
- __filename
- exports
- module
- require()
### 常見的全局對象
- process
    - Node的運行環境、參數訊息等。
- console
- 定時器函數
    - setTimeout(callback, delay[,...args])
        - callback在delay毫秒後執行一次
    - setInterval(callback, delay[,...args])
        - callback在delay毫秒後重複執行一次
    - setImmediate(callback, delay[,...args])
        - callback I/O事件後的回調立即執行
    - process.nextTick(callback[,...args])
        - 添加到下一個Tick中
- global
![](https://i.imgur.com/ycHOrkZ.png)