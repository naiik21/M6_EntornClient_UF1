function eliminaCaracter(){
    // Variables
    let text= prompt("Diguem una frase: ");
    let num;
    // Comprovació de que el numero sigui més petit o igual a la longitud de la cadena
    do{
        num= prompt("Diguem un numero inferior a la longuitud de la cadena: ");
    }while(text.length+1<=num);

    // Substring 
    console.log(text.substring(0, num-1)+text.substring(num));

}