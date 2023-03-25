function car(brand,model,region,hp){
    this.brand=brand;
    this.model=model;
    this.region=region;
    this.hp=hp;

   this.display = function(){

        console.log("Brand name : "+brand);
        console.log("Model name : "+model);
        console.log("Region name : "+region);
        console.log("Total Power : "+hp+" hp");
    }
}
var Tesla = new car("Tesla","Model-Y","NAVADA",1634)
Tesla.display();

