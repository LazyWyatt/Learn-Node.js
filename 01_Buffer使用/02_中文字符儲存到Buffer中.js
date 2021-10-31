const message = "小明";

// 對中文進行編碼: utf8
const buffer = Buffer.from(message);
console.log(buffer)
// <Buffer e5 b0 8f e6 98 8e>
// 一個中文佔據三個字節

// 對字節碼解碼: utf8
console.log(buffer.toString());


// 2. 編碼使用utf16le, 解碼使用utf8
const buffer16 = Buffer.from(message, 'utf16le');
console.log(buffer16)
console.log(buffer16.toString('utf16le'))
// <Buffer 0f 5c 0e 66>
