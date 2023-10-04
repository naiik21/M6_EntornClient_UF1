function temps(){
    let hora= parseInt(prompt("Diguem les hores: "));
    let minuts= parseInt(prompt("Diguem els minuts: "));
    let segons= parseInt(prompt("Diguem els segons: "));

    minuts= minuts + (hora*60);
    segons = Math.abs(segons + (minuts*60));
    console.log(segons + " segons");
    return segons;
}

function preu(){
    let segons= temps();
    const preSeg= 5/60;
    let centims= segons*preSeg;
    let euros=0;

    euros= Math.floor(centims/100);
    centims= centims%100;
    
    console.log("Preu final: " + euros + "." + (Math.floor(centims+10)) + "€");


}