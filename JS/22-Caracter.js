function conteCarcater(){
    // Variable
    let text=prompt("Diguem una frase: ");
    let caracter;
    let cont=0;

    // Comprovació que es un unic caracter
    do{
        caracter= prompt("Diguem una caracter:");
    }while(caracter.length>1)  

    // Recorrem la cadena per  veure quantes vegades es repeteix el caracter
    for(let n=0; n<text.length; n++){
        if(text[n].toLowerCase()==caracter){
            cont++
        }
    }
    
    if(cont>=2 && cont<=4){
        console.log("El caracter surt " + cont + " vegades");
    }else{
        console.log("El carcter no surt entre 2 i 4 vegades")
    }
}