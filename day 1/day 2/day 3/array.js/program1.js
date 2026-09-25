const EventEmitter = require('events');
const ud=new EventEmitter();
ud.on('greet', (name) => {
    console.log(`Hello there 2B, ${name}`)
});
ud.on('exit', (num) => {
    console.log(`thanqu for visiting ${num}`)
});
ud.emit('greet', 'Shawsti');
ud.emit('exit', 182 );