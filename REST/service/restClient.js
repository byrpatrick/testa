'use strict'

var Client = require('node-rest-client').Client;

var client = new Client();

var getRequest = function (url,callback){
    var client = new Client();
    var responseData = {};
    client.get(url, function(data, response){
        responseData = data;
        callback(responseData);
    });
};



module.exports ={
    getRequest
}