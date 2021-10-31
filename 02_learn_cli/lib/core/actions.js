const { promisify } = require('util');

const open = require('open')
const download = promisify(require('download-git-repo'))
//download-git-repo 的 最後需要 callback function , promisify 可以轉成回傳一個Promise


const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal')

// callback -> promisify(函數) -> Promise -> async await
const createProjectAction = async (project) => {
  console.log("wyatt helps you create your project!")

  // 1.clone項目到指定目錄
  await download(vueRepo, `${project}`, {clone: true});

  // 2.執行npm install
  // /^win/.test(process.platform) ? 'npm.cmd' : 'npm'
  // cwd: Current working directory
  const command = process.platform === 'win32' ? "npm.cmd": "npm"
  await commandSpawn(command , ['install'], {cwd: `./${project}`}) 

  // 3.執行npm run serve
  commandSpawn(command, ['run', 'serve'], 'cwd: `./${project}`')

  // 4.打開瀏覽器
  open("http://localhost:8080/")

  // return Promise.resolve("Hello World!") -> async返回的一定是一個Promise物件
}

module.exports = {
  createProjectAction
}