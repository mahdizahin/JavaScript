class adam{

    constructor(aveAge,cultivationStyle){
        this.aveAge=aveAge;
        this.cultivationStyle=cultivationStyle;
    }

    display(){
        console.log(this.aveAge);
        console.log(this.cultivationStyle);
    }

}


class ibrahim extends adam{

    constructor(location,aveAge,cultivationStyle){
        super( aveAge,cultivationStyle);
        this.location=location;

    }

    display(){
        super.display();
        console.log(this.location);
    }

}

class yousuf extends ibrahim{
    constructor(){

    }

}

class mohammad extends ibrahim{
    constructor(){

    }
}


const s1 = new ibrahim("Unknown","200","Unknown");
s1.display();
