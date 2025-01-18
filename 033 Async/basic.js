 

function main (show) {
    console.log(show);
    console.log("And its showing from main function,which is called back")
}


function bio (id,name,callBack){

    this.id=id;
    
    this.name=name;

    callBack(id+name);

}

bio("22456","mitnick",main);

 