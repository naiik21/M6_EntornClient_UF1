function temps(){
    let hora= parseInt(prompt("Diguem les hores: "));
    let minuts= parseInt(prompt("Diguem els minuts: "));
    let segons= parseInt(prompt("Diguem els segons: "));
    var temps=new Date();
    temps.setHours(hora);
    temps.setMinutes(minuts);
    temps.setSeconds(segons+1);
    console.log(temps.getHours() + ":" + temps.getMinutes() + ":" + temps.getSeconds());

}
