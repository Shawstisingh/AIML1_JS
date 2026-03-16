//console.log("Hello World");
//document.write("Hello World");
//var num=10;
//console.log(typeof(num));

//num = false;
//console.log(num);
//console.log(typeof(num));
//num="Sanjeev Soni";
//console.log(num);
//console.log(typeof(num));
//num=null;
//console.log(num);
//console.log(typeof(num));
//num=undefined;
//console.log(num);
//console.log(typeof(num));

//function 
//var sayHello=function();{
//alert("Hello");
//}
//array
//var numberArray={1,2,3};
//var animals= new Array("Dog","Cat","Horse");
//object 






//const sym1=Symbol(4);
//console.log(sym1);
//const sym2=Symbol(4);
//console.log(sym2);
//if(sym1==sym2){
  //  console.log("True");
//}
//else{
  //  console.log("False"); //because each symbol is unique even if they have the same description
//}



//var a =10;
  //      var b=20;
   //     var linebreak ="<br/>";
     //   document.write("(a==b)=>");
     //   result =(a==b);
       // document.write(result);
        //document.write(linebreak);
        //document.write("(a<b)=>");
        //result =(a<b);
        //document.write((result);
        //document.write(linebreak);
//var count;
//document.write("Starting loop"+"<br/>"");
//for(count=0;count<10;count++) {
  //  document.write(Current Count:"+count);
    //    document.write("br/>");
//}
//document.write(("loop stopped");


const person ={
    fname="ajay";
    Iname:"singh";
    age:25;
};
for(let x in person){
    console.log("person details:"+x+":"+person[x]);
}
 // var a=100;var b=13; var c=10; var linebreak="<br>";
        // document.write("a+b+c=");
        // result = a+b+c;
        // document.write(result);
        // document.write(linebreak);
        // document.write("a*b*c=");
        // result = a*b*c;
        // document.write(result);
        // document.write(linebreak);
        //  document.write("a/b/c=");
        // result = a/b/c;
        // document.write(result);
        // document.write(linebreak); //TO BREAK LINE
        //const element = document.getElementById("myH1")
       // let text = element.getAttribute("class")
       //console.log(text) 
        const heading =document.createElement("h2");
        const bodytag=document.getElementsByTagName("body")
        heading.innerText="hello";
        heading.style.backgroundColor="pink";
        bodytag.appendChild(heading);