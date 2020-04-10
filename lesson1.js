var http = require('http')

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.end('yjw')
}).listen(8099)
console.log('Server running at 127.0.0.1:8099')