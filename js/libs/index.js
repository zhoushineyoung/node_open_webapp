/**
 * Created by ZhouXY on 2014/7/13.
 */
var server = require("./Server");
var router = require("./Router");
var requestHandlers = require("./RequestHandlers");
    var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
server.service(router.route, handle);