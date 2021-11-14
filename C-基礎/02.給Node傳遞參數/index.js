const log = console.log.bind()
log('123')

console.log('Hello Node')
console.log(process.argv)

console.clear()

process.argv.forEach((item) => {
  console.log(item)
})

function foo() {
  bar()
}
function bar() {
  console.trace()
}

foo()
