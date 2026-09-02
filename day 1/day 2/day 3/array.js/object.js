// let c={
//     age:20,
//     job:"teacher",
//     details:function(){
//         console.log("my age is:"+this.age+" and my job is: "+this.job);
// },
// profile:"assistant professor",
// job_title:function(){
//     console.log("my job title is: "+this.profile);
// }
// }

const a={
    name:"john",
    age:25,
    salary:50000,
    display:function(){
        {
            console.log("my name is: "+this.name+" and my age is: "+this.age+" and my salary is: "+this.salary);
        },
        increasesalary:function(){
            this.salary+=10000;
            console.log("my salary is: "+this.salary);
        }

}