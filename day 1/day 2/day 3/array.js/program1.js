// const EventEmitter = require('events');
// const ud=new EventEmitter();
// ud.on('greet', (name) => {
//     console.log(`Hello there 2B, ${name}`)
// });
// ud.on('exit', (num) => {
//     console.log(`thank you for visiting ${num}`)
// });
// ud.emit('greet', 'Shawsti');
// ud.emit('exit', 182 );


//  class Button extends EventEmitter{
//     click(){
//         console.log("button clicked");
//         this.emit('click' , { timestamp: Date.now() });
//     }
// };
// const button = new Button();
// button.on('click', (event) => {
//     console.log(`button clicked at ${event.timestamp}`);
// });
// button.click();



// console.log("start")
// setTimeout(() => {
//     console.log("inside settimeout");
// }, 2000);
// setImmediate(() => {
//     console.log("inside setImmediate");
// });
// process.nextTick(() => {
//     console.log("inside nextTick");
// });
// console.log("end")

const fs = require('fs');
fs.writeFile("std.txt", "name: Shawsti",(err)=>{
    if(err)
    {   
        console.log("error occured",err);
    }
    else
    {
        console.log("file created successfully");
    }
})

fs.readFile("std.txt", "utf-8",(err,data)=>{
    if(err)
    {
        console.log("error occured",err);
    }
    else
    {
        console.log("file read successfully",data);
    }
})

fs.appendFile("std.txt", 
    "rollno: 182",(err)=>{
    if(err)
    {   
        console.log("error occured",err);
    }
    else
    {
        console.log("file appended successfully");
    }
})