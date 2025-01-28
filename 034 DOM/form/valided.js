
try{
function validedForm() {
    // Get the value of the input field with name="fullname"
    var fullname = document.forms["form1"]["fullname"].value;

    // Check if the fullname field is empty
    if (fullname.trim() === "") {
        alert("Name must be filled out"); // Show an alert if the field is empty
        return false; // Prevent the form from being submitted
    }

    // If the field is not empty, allow the form to be submitted
    return true;
}}catch(err){
    console.log("Enter name")
}

function forForm2(){
  var  number = document.forms["form2"]["number1"].value;

  if(number<10){
    alert("Number must be greater than 10"); 
    return false;
  }else{
    return true;
  }
}