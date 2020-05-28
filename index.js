
'use strict';

let fs = require('fs');
let path = require("path");
let escapeHtml = require('escape-html');

module.exports.resume = (req, res) => {

    const obj = fs.readFileSync('./resume.json', 'utf8', function(err, data) {
        if(err) {
            callback(err);
        }
        
    });

    const fdata = require('./resume.json')
    
    const response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "text/html"
        },
        "body": obj
    };

 res.send(response);          
};
