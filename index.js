
'use strict';

let escapeHtml = require('escape-html');
let express = require('express');


var app = express();
app.get('/test', function(req, res) {
    res.sendFile('./resume.html', {root: __dirname })
});
