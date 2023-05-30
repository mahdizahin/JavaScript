class emp{

    constructor(name,sal){
        this.name=name;
        this.sal=sal;
    }

    display(){
        console.log(this.name);
        console.log(this.sal);
    }
}

class teacher extends emp{

    constructor(name,sal,a,b,c){
        super(name,sal);
        this.a=a;
        this.b=b;
        this.c=c;

    }
   
    

    display(){
        super.display();
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    }
}

let refat = new teacher("ZAHIN",2,5,6,7);
refat.display();
console.log("--------------------------"); 
let zahin = new teacher("NZ",2,5,6);
zahin.display();


//404