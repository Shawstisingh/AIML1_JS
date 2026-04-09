let employees=[];
function addEmployee(){
    let name =
    document.getElementById("name").value;
    let empId =
    document.getElementById("empId").value;
    let salary =
    parseFloat(document.getElementById("salary").value);
    let dept =
    document.getElementById("dept").value;
    if (name === "" || empId === "" || isNaN(salary) || dept === "") {
        alert("Please fill in all fields correctly.");
        return;
}
let employee = {
    name: name,
    empId: empId,
    salary: salary,
    department: dept ,
};
employees.push(employee);
alert("Employee added successfully!");
document.getElementById("name").value = "";
document.getElementById("empId").value = "";
document.getElementById("salary").value = "";
document.getElementById("dept").value = "";
}
function filtersalary(){
    let filtered = employees.filter((emp)=> emp.salary > 50000);
    let output = "<h3>Employees with salary greater than 50,000:</h3>";
    filtered.forEach((emp)=>{
        output += `<p>Name: ${emp.name}, Emp ID: ${emp.empId}, Salary: ${emp.salary}, Department: ${emp.department}</p>`;
    });
    document.getElementById("output").innerHTML = output;    

    
}