var express = require('express');
var http = require('http');
var app  = express();

app.use(express.static("" + __dirname + "/dist"));
app.use(express.static("" + __dirname + "/bower_components"));

app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + "/dist" });
});

return app.listen(5000, function() {
    console.log("Listening on port 5000");
});
