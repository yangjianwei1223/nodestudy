var fs = require('fs')

// var data = '';

// var readerStream = fs.createReadStream('ab.txt')

// readerStream.setEncoding('UTF8')

// readerStream.on('data', function(chunk) {
//     data += chunk;
// })

// readerStream.on('end', function() {
//     console.log(data)
// })

// readerStream.on('error', function(err) {
//     console.log(err.stack)
// })

// 上面是读的， 下边是写的
// var data = '你们都是最棒的'

// var writerStream = fs.createWriteStream('out.txt')
// writerStream.write(data, 'UTF8')
// writerStream.end();
// writerStream.on('finish', function() {
//     console.log('写完了')
// })

// writerStream.on('error', function(err) {
//     console.log(err.stack)
// })

// 这边是pipe
var zlib = require('zlib')
var writerStream = fs.createWriteStream('out.txt');
var readerStream = fs.createReadStream('ab.txt');
readerStream.pipe(writerStream);
readerStream.pipe(zlib.createGzip())
            .pipe(fs.createWriteStream('out.txt.gz'))
console.log('zip over')