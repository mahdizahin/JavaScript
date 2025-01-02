function cg(num){
    if(num>=90){
        console.log("You got A+");
    }else if(num>=85){
        console.log("You got A");
    }else if(num>=80){
        console.log("You got B+");
    }else if(num>=75){
        console.log("You got B");
    }else if(num>=70){
        console.log("You got C+");
    }else if(num>=65){
        console.log("You got C");
    }else if(num>=60){
        console.log("You got D+");
    }else if(num>=50){
        console.log("You got D");
    }else {
        console.log("You got F");
    }
}

var student_1 = cg(49);
console.log(student_1);