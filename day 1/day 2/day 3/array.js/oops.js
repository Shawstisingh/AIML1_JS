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


class student()
{
    constructor(rollno,name,age)
    {
        this.rollno=rollno;
        this.name=name;
        this.age=age;
        console.log"Student details are",this.rollno,this.name,this.age);

    }
}
let s=new student();
let s1=new student(182,"shawsti",19);
console.log(s1);
