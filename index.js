var server = require('./w3c/lesson6');
var router = require('./router');

server.start(router.route);