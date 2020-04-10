var server = require('./lesson6');
var router = require('./router');

server.start(router.route);