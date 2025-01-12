
const name = prompt ("Enter your name : ")

const dataTable ={
    data1 : name,
    data2:"xyz",
    data3:"What is the aim of this",

    get dataSet(){

        return this.data3;
    }
}

console.log(dataTable.dataSet);

Object.defineProperty(dataTable,"information",{
    get:function(){
        return this.data1 +" "+this.data3;
    }
});

console.log(dataTable.information)