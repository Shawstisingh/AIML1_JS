console.log("=====array of objects=====");
let name = "Shawsti Singh";
console.log(name);
//string length
console.log("length=" + name.length);
//1. toUpperCase()
console.log("Uppercase=" + name.toUpperCase());
//2. toLowerCase()
console.log("Lowercase=" + name.toLowerCase());
//3. charAt()
console.log("charAt=" + name.charAt(0));
//4. indexOf()
console.log("indexOf=" + name.indexOf("S"));
//5. lastIndexOf()
let message ="JavaScript is a programming language.";
console.log("lastIndexOf=" + message.lastIndexOf("is"));
//6. slice()
console.log(
    "slice=" ,
    message.slice(0, 7)
);
//7.split()
let data="html,css,javascript,react";
let result=data.split(",");
console.log("split=" ,result);
//8. replace()
let text="I love JavaScript";
let newText=text.replace("love","like");
console.log("replace=" ,newText);