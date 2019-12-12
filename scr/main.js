var fs = require("fs");

//versao 1
//var data = fs.readFileSync('input.txt');
//console.log(data.toString());

//versao 2
fs.readFile('input.txt', function(err, data) {
	if (err) return console.error(err);
	console.log(data.toString());
});

console.log("Program Ended");