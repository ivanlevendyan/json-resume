'use strict';

let fs = require('fs');
let path = require("path");
let escapeHtml = require('escape-html');

module.exports.resume = (req, res) => {

    const obj = fs.readFileSync('./resume.html', 'utf8', function(err, data) {
        if (!err) {
            console.log('received data: ' + data);
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        } else {
            console.log(err);
        }
        
    });
    
};
