// var firstName = "Shawsti";
// var lastName = "Singh";
// console.log(firstName);
// console.log(lastName);



// var a=40;
// var b=30;
// if(a>b)
// {
//     console.log("A is greater, value of A is: ", a);
// }
// else
// {
//     console.log("B is greater, value of B is: ", b);
// }


// 


// function greet (fname, lname)
// {
//     console.log("Hello " , fname , lname);
// }
// greet ("Shawsti", "Singh");
// greet("Rimjhim", "Keshri");



// function add (a, b)
// {
//     return a+b;
// }
// var result=add(20, 30);
// console.log("Sum of 20 and 30 is: ", result);


// function fullName (fname = "ABES ", lname= "Engineering College")
//   {
//     return fname + " " + lname;
//   }
//   console.log(fullName());
// //   console.log(fullName("Shawsti", "Singh"));


// function totalmarks(maths, science, english)
// {
//         return maths + science + english;
// }

// console.log("=====array methods=====");
//         let arr=[10,20,30,40,50];
//         let sum=0;
//         for(let i=0; i<arr.length; i++)
//         {
//             console.log(arr[i]);
//             sum+=arr[i];
//         }
//         console.log("Sum of array elements is: ", sum);


console.log("=====array 2d methods=====");
let students=[
    [ 1, "Shawsti","Singh", "21", 90, 80, 70],
    [ 2, "Rimjhim", "Keshari", "20", 80, 70, 60],
    [ 3, "Sakshi", "Pandey", "19", 70, 60, 50],
];
console.log("Student Name: ", students[0][1], students[0][2]);
console.log("Student Age: ", students[0][3]);
console.log("Student Marks: ", students[0][4], students[0][5], students[0][6]);
