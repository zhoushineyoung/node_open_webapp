/**
 * Created by ZhouXY on 2014/7/12.
 */
var http = require('http');
var server = require('./Logger');
var logger = server.logger();
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    logger.info('2Server running at http://127.0.0.1:8089/');
    console.log('2Server running at http://127.0.0.1:8089/');
}).listen(8089, '127.0.0.1');
logger.info('Server running at http://127.0.0.1:8089/');
console.log('Server running at http://127.0.0.1:8089/');