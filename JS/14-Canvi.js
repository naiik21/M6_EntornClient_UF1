function canvi(){
    let preu= parseFloat(prompt("Diguem el preu del producte: "));
    let lliurat=parseFloat(prompt("Diguem amb quina quantitat s'ha pagat: "));
    let canvi=0;
    let moneder=[500,200,100,50,20,10,5,2,1,0.50,0.20,0.10,0.05,0.02,0.01];

    canvi=(lliurat-preu).toFixed(2);
    let restu=canvi;
    for(let i=0; i<moneder.length; i++){
        if(parseInt(canvi/moneder[i])>0){
            console.log(parseInt(canvi/moneder[i]) + " de " + moneder[i]);
            canvi=canvi%moneder[i];
        }
    }
    console.log("Total canvi: " + restu);
}