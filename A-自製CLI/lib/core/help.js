const program = require('commander')

const helpOptions = () => {
  // 增加自己的options
  program.option('-w --wyatt', 'a wyatt cli')
  program.option('-d --dest <dest>', 'a destination folder,例如: -d /src/components')
  program.option('-f --framework <framework>', 'Your framework')
  //console.log(program._optionValues.dest)
  // 監聽指令
  program.on('--help', function() {
    console.log("")
    console.log("Other:")
    console.log(" other options~")
  })
}

module.exports = helpOptions
