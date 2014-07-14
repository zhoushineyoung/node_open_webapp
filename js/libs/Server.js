/**
 * Created by ZhouXY on 2014/7/12.
 */
var http = require('http');
var logger = require('./Logger').logger();
var url = require("url");
function service(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        logger.info("Http" + request.httpVersion + ", [" + request.method + "]," + " Request for [" + pathname + "] received.");
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response);
    }
    http.createServer(onRequest).listen(8089, '127.0.0.1');
    logger.info("Server has started.");
    console.log("Server has started.");
}
exports.service = service;