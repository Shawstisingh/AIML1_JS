function calculateStudentPercentages(maths, english, science)
 {
    var total = maths + english + science;
    var percentage = (total / 300) * 100;
    return percentage;
 }
 console.log("Percentage of student is: ", calculateStudentPercentages(90, 80, 70) + "%");  
 