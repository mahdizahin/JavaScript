
function cg(num){
    if(num>=90){
        console.log("You got A+");
    }
    var grade = num/10;
    return grade;
}

var student_1 = cg(100);
console.log(student_1);