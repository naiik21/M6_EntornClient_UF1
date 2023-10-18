function longitud(){
    let txt1= prompt("Diguem una frase: ");
    let txt2= prompt("Diguem una altra frase: ");
    if(txt1.length==txt2.length){
        console.log("Tenen la mateixa longitud");
    }else{
        console.log("Diferent longitud");
    }
}