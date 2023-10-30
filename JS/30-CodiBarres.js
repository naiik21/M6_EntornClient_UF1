function codibarres(){
    // Variables
    let codi;
    let total=0;
    let cont=0;
    let codiR;
    do{
        codi=prompt("Diguem un numero de 8 o 13 digits:")
    }while(codi.length>13);

    // Afegim zeros a la esquerra per arribar a 8 o 13
    if(codi.length<8){
        codi=addLeftZero(codi, 8);
    }else if(codi.length>8){
        codi=addLeftZero(codi, 13);
    }

    //console.log(codi);
    codiR=invertirCadena(codi);

    // Comprobem que el codi de barres sigui correcte
    for(let n=1; n<=codiR.length; n++){
        if(n%2!=0){
            total+=codiR.charAt(n-1)*3;
        }else{
            total+=codiR.charAt(n-1)*1;
        }
    }
    // console.log(total);
    while(total%10!=0){
        cont++;
        total++;
    };
    // console.log(cont);
    // console.log(total);
    if(cont==codi.charAt(codi.length-1)){
        console.log("Corrcte");
    }else{
        console.log("Incorrecte");
    }
}

// Dona la volta a la cadena i li treu el primer valor
function invertirCadena(codi) {
    let separarCadena = codi.split("");
    let invertir = separarCadena.reverse(); 
    let unir = invertir.join(""); 
    unir=unir.substring(1);
    return unir;
}

// Afegeix 'length' de zero a l'esquerra de codi
function addLeftZero(codi, length) {
    return (codi.toString().length < length) ? addLeftZero("0" + codi, length) : codi;
}