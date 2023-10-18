//it will give us information about our environment, our operating system
const os = require("os");

//Platform
console.log(os.platform());

//CPU architecture
console.log(os.arch());

//CPU core info
console.log(os.cpus());

//Free memory
console.log(os.freemem());

//Totol memory
console.log(os.totalmem());

//Home dir
console.log(os.homedir());

//Uptime
console.log(os.uptime());