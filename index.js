let server = require('./server.js');
let router = require('./router.js');
let requesthandler = require('./requesthandler.js');

server.start(router.route, requesthandler.handle);