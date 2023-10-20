function nitBona(){
    let hora= prompt("Diguem la hora que es ex.(00:00): ");
    let hores=0;
    let minuts=0;
    if(hora == "00:00"){
        document.write("Bon any Nou!!!");
    }else{
        let horaDiv= hora.split(":");
        hores= 23-parseInt(horaDiv[0]);
        minuts = 60-parseInt(horaDiv[1]);
        minuts += hores * 60;
        document.write(minuts);
    }
}