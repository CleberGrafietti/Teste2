
if (process.argv.length>0){
	console.log(">0" + process.argv[2]);
}

console.log(process.platform);

process.on('exit', function(code) {
   // Following code will never execute.
   setTimeout(function() {
      console.log("This will not run");
   }, 0);
  
   console.log('About to exit with code:', code);
});
console.log("Program Ended");