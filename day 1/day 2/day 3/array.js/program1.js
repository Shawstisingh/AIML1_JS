const EventEmitter = require('events');
const ud=new EventEmitter();
ud.on('greet', (name) => {
    console.log(`Hello there 2B, ${name}`)
});
ud.on('exit', (num) => {
    console.log(`thank you for visiting ${num}`)
});
ud.emit('greet', 'Shawsti');
ud.emit('exit', 182 );


 class Button extends EventEmitter{
    click(){
        console.log("button clicked");
        this.emit('click' , { timestamp: Date.now() });
    }
};
const button = new Button();
button.on('click', (event) => {
    console.log(`button clicked at ${event.timestamp}`);
})