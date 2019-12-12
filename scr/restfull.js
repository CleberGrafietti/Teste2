var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extend: false});

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile( __dirname + "/" + "crud.html");
});


function lerArquivoUsers(callback){
	fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
		console.log(data);
		return callback(data);
	}); 
}

app.get('/listUsers', function (req, res) {
	/*fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
		console.log(data);
		res.end(data);
	}); */
	lerArquivoUsers((data) => {
		res.end(data);
	});
});

app.post('/addUser', urlencodedParser, function (req, res) {
	//var objeto = JSON.parse(req.body);
	console.log("Name: " + req.body.name);

	var user = {
	    "user4" : {
			"name" : req.body.name,
			"password" : req.body.password,
			"profession" : req.body.profession,
			"id": req.body.id
		}
	}
	
	lerArquivoUsers((data) => {
		console.log('1');
		console.log(data);
		console.log('2');
		data2 = JSON.parse(data);
		data2["user4"] = user["user4"];
		console.log(data2["user1"]);
		console.log(data2["user4"]);
		
		res.end(JSON.stringify(user) + JSON.stringify(data2));
		console.log(data2);
		
	});

});


app.delete('/deleteUser', function (req, res) {
	lerArquivoUsers((data) => {
		
		data = JSON.parse( data );
		console.log("Antes delete: " + data);
		delete data["user2"];
		console.log("Depois delete: " + data);
		res.end(JSON.stringify(data));
	});		
});



var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});