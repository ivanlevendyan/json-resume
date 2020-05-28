'use strict';

let fs = require('fs');
let path = require("path");

module.exports.resume = (data, context, callback) => {

    const obj = fs.readFileSync('./resume.json', 'utf8', function(err, data) {
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

    callback(null, 'Success!');

};
