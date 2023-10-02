/*
console.log("limpia la consola");
console.warn("sort una warn");
console.error("sort en vermell");
console.time("nomTimer");   // crea un timer errere
console.timeEnd("nomTimer")
console.timeLog("")
*/

let num= prompt("Posa un numero del 1 al 10");
if(isNaN(num)){
    alert("No es un numero");
    location.reload();
}else{
    for (let step=0; step <11; step++){
        console.log(`${num} x ${step} = ${num*step}`);
    }
}



