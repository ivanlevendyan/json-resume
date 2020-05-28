'use strict';

let fs = require('fs');
let path = require("path");
let escapeHtml = require('escape-html');

module.exports.resume = (req, res) => {

    const obj =  fs.readFileSync('./resume.html', 'utf8', function(err, data) {
        if (err) {
                callback(err);
        }
        
    });
    
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write(obj);
 res.end();
    
};
