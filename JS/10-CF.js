function transformaGraus(){
    let num= parseInt(prompt("Diguem els graus: "));
    let temp="";
    let result=0;
    do{
        temp= prompt("Marca una C si son Celsius o F si son Fahrenheit: ")
    }while(!(temp=="C" || temp=="F"));

    if(temp=="C"){
        result= num*(9.0/5.0)+32;
        console.log(num + "º C son " + result + "º F");
    }else{
        result=(num-32)/(9.0/5.0);
        console.log(num + "º F son " + result + "º C");
    }   
}