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


// class hello5{
//     static name="example of static variable";
//     constructor(){
//     this.instancevariable="example of instance variable";
// }
// show(){
//     console.log("instance variable",this.instancevariable);
//     console.log("static variable",hello5.name);
// }
// }
// let h5=new hello5();
// h5.show();

// //without constructor
// class hello6{
//     faculty="shawsti";
// }
// let h6=new hello6();
// console.log(h6.faculty);




class student{
    static count =0;
    constructor(rollno,name,marks){
        this.rollno=rollno;
        this.name=name;
        this.marks=marks;
        student.count++;
    }
    displayresult(){
        console.log("Roll No:",this.rollno);
        console.log("Name:",this.name);
        console.log("Marks:",this.marks);
        if (this.marks>=40){
            console.log("Result: Pass");
        }
        else{
            console.log("Result: Fail");
        }
        static displaycount(){
            console.log("Total Students:",student.count);
        }
    }
    let s1=new student(101,"Rimjhim",45);
    let s2=new student(102,"Shawsti",35);
    let s3=new student(103,"Sakshi",55);
    s1.displayresult();
    s2.displayresult();
    s3.displayresult();
    student.displaycount();
 

    class bankaccount{
        bankaccountholder;
        accountno;
        balance;
        constructor(bankaccountholder,accountno,balance)
        {
            this.bankaccountholder=bankaccountholder;
            this.accountno=accountno;
            this.balance=balance;
        }
        
    }
