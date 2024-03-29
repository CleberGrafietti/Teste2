var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extend: false});

app.use(express.static('public'));
app.get('/FormPost.html', function (req, res) {
	res.sendFile( __dirname + "/" + "FormPost.html");
});

app.post('/process_post', urlencodedParser, function (req, res) {
	response = {
		first_name: req.body.first_name,
		last_name: req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});