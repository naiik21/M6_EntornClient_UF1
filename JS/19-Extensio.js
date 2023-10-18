function extensio(){
    let archiu= prompt("Diguem el nom d'un archiu amb la seva extensió: ");
    let archiuS= archiu.split(".");// Si no es pot fer amb .pop()ya que afaga el ultim element de l'array
    
    /*
    let extensio="";
    for(let n=0; n<archiuS.length; n++){
        extensio=archiuS[n];
    }
    */
    console.log("L'archiu " + archiu + " té l'extensió " + archiuS[archiuS.length-1]);
}