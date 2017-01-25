'use strict';

let AWS = require('aws-sdk');

let s3 = new AWS.S3({apiVersion: '2012-09-25'});
let fs = require('fs');
let path = require("path");

module.exports.resume = (event, context, callback) => {

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

    callback(null, response);

};
