const a = {
    name: "john",
    age: 25,
    salary: 50000,
    display: function() {
        console.log("my name is: " + this.name + " and my age is: " + this.age + " and my salary is: " + this.salary);
    },
    increasesalary: function() {
        this.salary += 10000;
        console.log("my salary is: " + this.salary);
    }
}

a.display(); 
a.increasesalary();