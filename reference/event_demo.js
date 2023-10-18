const EventEmitter = require("events");

//Create Class
class MyEmitter extends EventEmitter { }

//Init object
const myEmitter = new MyEmitter();

//Event Listened
myEmitter.on('event', () => console.log('Event Fired!'));

//Init event
myEmitter.emit('event');