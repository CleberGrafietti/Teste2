var fs = require("fs");
var sleep = require('system-sleep');

var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

function lerArq(){
	// Handle stream events --> data, end, and error
	readerStream.on('data', function(chunk) {
	   data += chunk;
	});
}

//function lerArq() {
//	console.log('foi' + i);
//}


for (i=0;i<10;i++){
	setTimeout(lerArq, 2000)
}



readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");