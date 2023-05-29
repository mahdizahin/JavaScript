class cat{

    constructor(brd,wt){
        this.brd=brd;
        this.wt=wt;
    }

    display(){
        console.log("Meao: Mature");
        console.log(this.brd);
        console.log(this.wt);
    }
}

class pussycat extends cat{

    constructor();

    display(){
        super.display();
        console.log("Umm meaoo");
    }
}

let liza = new pussycat("parsian","5kg");
liza.display();