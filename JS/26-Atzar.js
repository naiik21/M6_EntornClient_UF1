function atzar(){
    // Varaibles
    let num= Math.floor(Math.random() * (100 - 1) + 1);
    let intents=0;
    let result;

    // Busquem el numero que s'ha generat aleatoriament
    do{
        result=prompt("Diguem un numero entre el 1-100: ");
        intents++;
        if(result==0){
            console.log("GAME OVER :(")
            return;
        }else if(result>num){
            console.log("El numero que has d'adivinar es més petit");
        }else if(result<num ){
            console.log("El numero que has d'adivinar es més gran");
        }
    }while(num!=result)
    console.log("El numero ha adivinar era el " + num + " i ho has aconseguit en " + intents);
}