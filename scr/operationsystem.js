var os = require("os");

console.log(os.type());
console.log(os.totalmem());
console.log((os.freemem()/1024/1024/1024));