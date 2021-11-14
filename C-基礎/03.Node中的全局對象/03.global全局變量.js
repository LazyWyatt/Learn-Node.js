console.log(global)

var name = 'wyatt'
console.log(name)
console.log(global.name) //不行的，因為每一個模組是分開的

// process是手動把他加進全局變數裡的
