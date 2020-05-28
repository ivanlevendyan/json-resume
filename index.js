'use strict';

let fs = require('fs');
let path = require("path");
let escapeHtml = require('escape-html');

module.exports.resume = (req, res) => {

    fs.readFileSync('./resume.html', 'utf8', function(err, data) {
        if (!err) {
            console.log('received data: ' + data);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        } else {
            console.log(err);
        }
        
    });
    
};
