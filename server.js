/**
 * MODULES
 * The modules to import.
 */
var express = require("express");
var app = express();


/**
 * CONFIG
 */
app.use('/js', express.static(__dirname + '/js'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/partials', express.static(__dirname + '/partials'));

/**
 * ROUTING
 * This makes sure that AngularJS routing and node.js routing work together.
 */
app.all('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

var port = 8080;
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});