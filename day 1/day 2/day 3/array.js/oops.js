// class hello{

// }
// let h1=new hello("ud")
// //without constructor
// class hello2{
//     faculty="shawsti";

// }
// let h2= new hello();
// console.log(h2.faculty);
// //simple constructor
// class hello{
//     name="utkarsh";
//     show(){
//         console.log("name",this.name);
//     }
//     let h=new hello();
//     h.show();
// }


// class student()
// {
//     constructor(rollno,name,age)
//     {
//         this.rollno=rollno;
//         this.name=name;
//         this.age=age;
//         console.log"Student details are",this.rollno,this.name,this.age);

//     }
// }
// let s=new student();
// let s1=new student(182,"shawsti",19);
// console.log(s1);



// class hello()
// {
//     static name="expample of static variable";
//     static show()
//     {
//         console.log("name",this.name);

//     }
// }
// hello.show();


class hello5{
    static name="example of static variable";
    constructor(){
    this.instancevariable="example of instance variable";
}
show(){
    console.log("instance variable",this.instancevariable);
    console.log("static variable",hello5.name);
}
}
let h5=new hello5();
h5.show();