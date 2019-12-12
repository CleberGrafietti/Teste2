console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Getting data");
//
// Do some processing here...


function tempo(){
	console.log("Tempo");
	console.timeEnd('Getting data');
	console.info("Program Ended")
}

console.trace(counter);
setTimeout(tempo, 5000);
console.trace(counter);


// 
