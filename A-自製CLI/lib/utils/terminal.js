/*
  執行終端機命令相關的程式
*/
const { exec, spawn } = require('child_process')

// 可變參數
const commandSpawn = (...args) => {
  return new Promise ((resolve, reject) => {
    //...args解構
    const childProcess = spawn(...args);
    //childProcess.stdout.pipe(process.stdout)
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on("close", () => {
      resolve()
    })
  }) 

}

module.exports = {
  commandSpawn
}