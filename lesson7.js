var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('req for ' + pathname + ' received.')
    fs.readFile(pathname.substr(1), function(err, data) {
        if(err) {
            console.log(err);
            res.writeHead(200, {'Content-Type': 'text/html'})
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data.toString())
        }
        res.end();
    })
}).listen(8099);
console.log('server running at http://127.0.0.1:8099/')