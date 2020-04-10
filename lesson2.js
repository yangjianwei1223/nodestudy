var fs = require('fs')
fs.readFile('ab.txt', function(err, data) {
    if (err) return console.err(err)
    console.log(data.toString())
})
// console.log(data.toString())
console.log('程序over')