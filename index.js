var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/addStudent', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/student', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/student:id', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/student:fName', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/student:lName', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/student:mail', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/student:mail', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/student:course', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/student:guardian', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.put('/student:id', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.put('/student:fName', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.delete('/student:id', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.listen(8080);