class person{

    constructor(name,id){
        this.name=name;
        this.id=id;
    }

    display(){
        console.log("Name is "+this.name);
        console.log("Id id "+this.id);
    }

}

let student = new person("Ar3mas",777);
student.display();