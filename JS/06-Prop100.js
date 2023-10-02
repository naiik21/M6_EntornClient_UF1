function prop100(){
    let n1= parseInt(prompt("Diguem un numero: "))
    let n2= parseInt(prompt("Diguem un altre numero: "))
    let result;
    if(Math.abs(n1-100)<Math.abs(n2-100))
        console.log("El numero més aprop de 100 es: " + n1)
    else
        console.log("El numero més aprop de 100 es: " +n2);
}