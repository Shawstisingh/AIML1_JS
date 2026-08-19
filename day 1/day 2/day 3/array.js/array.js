// console.log("=====string=====");
// let name = "Shawsti Singh";
// console.log(name);
// //string length
// console.log("length=" + name.length);
// //1. toUpperCase()
// console.log("Uppercase=" + name.toUpperCase());
// //2. toLowerCase()
// console.log("Lowercase=" + name.toLowerCase());
// //3. charAt()
// console.log("charAt=" + name.charAt(0));
// //4. indexOf()
// console.log("indexOf=" + name.indexOf("S"));
// //5. lastIndexOf()
// let message ="JavaScript is a programming language.";
// console.log("lastIndexOf=" + message.lastIndexOf("is"));
// //6. slice()
// console.log(
//     "slice=" ,
//     message.slice(0, 7)
// );
// //7.split()
// let data="html,css,javascript,react";
// let result=data.split(",");
// console.log("split=" ,result);
// //8. replace()
// let text="I love JavaScript";
// let newText=text.replace("love","like");
// console.log("replace=" ,newText);

// //9.concat()
// let first="shawsti";
// let last="singh";
// let fullName=first.concat(" ",last);
// console.log("concat=" ,fullName);
// //10.includes()
// let includesText=message.includes("JavaScript");
// console.log("includes=" ,includesText);
  


// console.log("=====array=====");
// //push() method
// let fruits = ["apple", "banana", "orange"];
// fruits.push("grape");
// console.log(fruits);
// //pop() method
// fruits.pop();
// console.log(fruits);
// //shift() method
// fruits.shift();
// console.log(fruits);   //first remove
// //unshift() method
// fruits.unshift("kiwi"); //first me add
// console.log(fruits);


 console.log("=====date objects=====");
 let date=new Date();    
 console.log(date);

 //get full year
 console.log("getFullYear=" + date.getFullYear());
 //get month
 console.log("getMonth=" + date.getMonth());
 //get day
 console.log("getDate=" + date.getDate());
 //get hours
 console.log("getHours=" + date.getHours());
 //get minutes
 console.log("getMinutes=" + date.getMinutes());
 //get seconds
 console.log("getSeconds=" + date.getSeconds());
  

 console.log("===== maths object=====");
 console.log("PI=" + Math.PI);
 console.log("round=" + Math.round(4.7));
 console.log("ceil=" + Math.ceil(4.2));
 console.log("floor=" + Math.floor(4.8));
 console.log("random=" + Math.random());
 console.log("min=" + Math.min(4, 7, 1, 9));
 console.log("max=" + Math.max(4, 7, 1, 9));
 console.log("sqrt=" + Math.sqrt(16));
 console.log("abs=" + Math.abs(-5));
 console.log("pow=" + Math.pow(2, 3));
 