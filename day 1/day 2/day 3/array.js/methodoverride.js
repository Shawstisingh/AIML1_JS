// class employee{
//     constructor(id, name, basicSalary){
//         this.id = id;
//         this.name = name;
//         this.basicSalary = basicSalary;
//     }
//     calculateSalary(){
//         return this.basicSalary;
// }
// }
// class manager extends employee{
//     constructor(id, name, basicSalary, incentive){
//         super(id, name, basicSalary);
//         this.incentive = incentive;
//     }
//     calculateSalary(){
//         return super.calculateSalary() + this.incentive;
//     }
// }
// let l1 = new employee(182, "Shawsti", 50000);
// console.log("Employee Salary:", l1.calculateSalary());      
// let m1 = new manager(154, "Rumjhum", 60000, 10000);
// console.log("Manager Salary:", m1.calculateSalary());



// function printname()
// {
//     console.log("shawsti");
// }
// printname();
// {
//     setTimeout(() => {
//         console.log("rumjhum");
//     }, 2006);
// }




//promise
let complete=true;
let p=new Promise(function(resolve,reject){
    if(complete)
    {   
        resolve("Promise resolved successfully");
    }
    else
    {
        reject("Promise rejected");
    }
});