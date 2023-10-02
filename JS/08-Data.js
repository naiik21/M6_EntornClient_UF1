function data(){
    let any= parseInt(prompt("Diguem l'any: "));
    let mes= parseInt(prompt("Diguem el mes: "))-1;
    let dia= parseInt(prompt("Diguem el dia: "))-1;
    var data=new Date();

    data.setFullYear(any);
    data.setMonth(mes+1);
    data.setDate(dia+1);

    if(any != data.getFullYear()){
        console.log("Has introduit un any erroni");
    }else if(mes+1 != data.getMonth()){
        console.log("Has introduit un mes erroni");
    }else if(dia+1 != data.getDate()){
        console.log("Has introduit un dia erroni");
    }else{
        console.log(data.getFullYear() + ":" + data.getMonth() + ":" + data.getDate());
    }
}