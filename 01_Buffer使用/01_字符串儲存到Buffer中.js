const message = "Hello World";

// 創建Buffer
// 1.創建方式一: 不推薦
// const buffer = new Buffer(message);


// 2.創建方式二:
const buffer = Buffer.from(message);

console.log(buffer)
// <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64> 16進制