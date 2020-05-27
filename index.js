'use strict';

let fs = require('fs');
let path = require("path");

module.exports.resume = (event, context, callback) => {

    const obj = fs.readFileSync('./resumne.json', 'utf8', function(err, data) {
        if(err) {
            callback(err);
        }
    });

    const response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "text/json"
        },
        "body": obj
    };

    callback(null, response);

};
