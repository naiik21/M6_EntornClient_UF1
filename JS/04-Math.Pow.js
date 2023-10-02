function potencia(){
    let num= prompt("Donem la base: ");
    let ele= prompt("Donem l'exponent: ");
    let result=num;
    console.time();
    console.log("Potència pow: " + Math.pow(num, ele));
    console.timeEnd();

    console.time();
    for(let i=1; i<ele; i++){
        result *= num;
    }
    console.log("Potència bucle: " + result);
    console.timeEnd();
}

potencia();