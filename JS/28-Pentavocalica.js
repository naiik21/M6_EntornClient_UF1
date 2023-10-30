function pentavocal(){
    //Variables
    let text=prompt("Diguem una paraula: ");
    const vocals= [/[aàáä]/gi, /[eèéë]/gi, /[iìíï]/gi, /[oóòö]/gi, /[uùúü]/gi];

    // Busquem que la paraula tingui totes les vocals
    for(let n=0; n<=vocals.length; n++){
        if(text.match(vocals[n])){
            continue;
        }else{
            console.log("No es pentavocalica");
            return;
        }
    }
    console.log("Es paraula " + text + " es pentavocalica.");
    
}