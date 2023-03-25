function Peram1(name,id,roll){

    this.name=name;
    this.id=id;
    this.roll=roll;
    
    //display_method

    this.display=function(){
        console.log("Name is : "+name);
        console.log("ID is : "+id);
        console.log("Roll is : "+roll);
        
    }
    
}
 //here p1 is a object of Peram1 which is stored in var : Ki odvut Niyom re bhai
var p1 = new Peram1("Scorpion",4471,107);
p1.display();