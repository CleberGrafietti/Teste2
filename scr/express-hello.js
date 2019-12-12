var express = require('express');
var app = express();

app.get('/', function(req, res) {
	
	var body  = "<form method='post'>" +
				"Hello World 3 :" +
				"<input type='text' name='campo'/>" +
				"<input type='submit' value='Submit'>" +
				"</form>";
	if (req.param('campo')!=null){
		body += "<br> Valor informado: " + req.param('campo');
	}
	
	res.send(body);
	//res.send(req.baseUrl);	
});

var server = app.listen(8081,  function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});
