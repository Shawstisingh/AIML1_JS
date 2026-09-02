// const a = {
//     name: "john",
//     age: 25,
//     salary: 50000,
//     display: function() {
//         console.log("my name is: " + this.name + " and my age is: " + this.age + " and my salary is: " + this.salary);
//     },
//     increasesalary: function() {
//         this.salary += 10000;
//         console.log("my salary is: " + this.salary);
//     }
// }

// a.display(); 
// a.increasesalary();




function show() {
    console.log("My address is: " + this.address);
    console.log("My city is: " + this.city);
}

const e = {
    address: "123 Main St",
    city: "New York",
    show: show
};

const f = {
    address: "456 Elm St",
    city: "Los Angeles",
    show: show
};

e.show();
f.show();

function college() {
    console.log("My college name is: " + this.collegeName);
    console.log("My college location is: " + this.collegeLocation);
    console.log("My college established year is: " + this.collegeEstablishedYear);
}

const department = {
    name: "Computer Science",
    collegeName: "Abes college",
    collegeLocation: "ghaziabad",
    collegeEstablishedYear: 2000,
    show: college
};

const courseClass = {
    name: "aiml",
    collegeName: "Abes college",
    collegeLocation: "ghaziabad",
    collegeEstablishedYear: 2000,
    show: college
};

department.show();
courseClass.show();