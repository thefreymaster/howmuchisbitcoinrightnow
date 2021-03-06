var http = require("http");
var https = require("https");
var express = require('express');

var tls = require('tls');
var fs = require('fs');
var cmd=require('node-cmd');

var request = require("request");
var bodyParser = require('body-parser');


var bodyParser = require('body-parser');


var app = express();
var port = 4301;
app.listen(process.env.PORT || port, function () { 
    console.log('Running REST HTTPS server on port: '+port);
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response){
    response.sendFile(path.resolve(__dirname, '/public', 'index.html'));
});


app.get('/api/quote', function(req, res){

    var options = { 
        method: 'GET',
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json'

        };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);

        res.json(JSON.parse(body));
    });

});

app.get('/api/yesterday_price', function(req, res){

    var options = { 
        method: 'GET',
        url: 'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday'

        };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);

        res.json(JSON.parse(body));
    });

});

app.get('/api/historic_price', function(req, res){

    var options = { 
        method: 'GET',
        url: 'https://api.coindesk.com/v1/bpi/historical/close.json'

        };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);

        res.json(JSON.parse(body));
    });

});


// app.get('/api/time', function(req, res){

//     var options = { 
//         method: 'GET',
//         url: 'https://api.coinbase.com/v2/time'

//         };

//     request(options, function (error, response, body) {
//     if (error) throw new Error(error);

//         res.json(JSON.parse(body));
//     });

// });




