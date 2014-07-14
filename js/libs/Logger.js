/**
 * Created by ZhouXY on 2014/7/13.
 */
var log4js = require('log4js');
log4js.configure('../../config/log4js_config.json', {});

exports.logger=function(){
    var logger = log4js.getLogger("console");
    logger.setLevel('INFO');
    return logger;
};