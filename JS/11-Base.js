function calculadoraBase(){
    let num = parseInt(prompt("Diguem un numero: "));
    let tipus="";
    let divisor=0;
    let base="";
    let aux=num;
    let residu=0;
    let result="";
    let nums= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    
    do{
        tipus= prompt("Diguem si vols pasar-ho a binaria amb una 'B', octal amb una 'O' o hexadecimal amb una 'H': " );
    }while(!(tipus.toUpperCase()=="B" || tipus.toUpperCase()=="O" || tipus.toUpperCase()=="H"))
    
    if(tipus=="B"){
        divisor=2;
        base="binari";
    }else if(tipus=="O"){
        divisor=8;
        base="octal";
    }else{
        divisor=16;
        base="hexadecimal";
    }

    if(num===0){
        console.log(num + " en base 10 es 0 en " + base);
    }else if(num<0){
        console.log("ERROR");
    }else{
        while(aux>0){
            residu=Math.floor(aux%divisor);
            aux= Math.floor(aux/divisor);
            result= nums[residu] + result;
        }
        console.log(num + " en base 10 es " + result + " en " + base);
    }
}