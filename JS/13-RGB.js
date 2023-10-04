function zero(d){
    return (d<10) ? '0' + d.toString() : d.toString();
}

function rgb(){
    let num1;
    let num2;
    let num3;

    num1 = parseInt(prompt("Diguem un numero: "));
    num2 = parseInt(prompt("Diguem un numero: "));
    num3 = parseInt(prompt("Diguem un numero: "));

    num1 = num1.toString(16);
    num2 = num2.toString(16);
    num3 = num3.toString(16);

   

    
        console.log("#"+zero(num1)+zero(num2)+zero(num3));
}

   



    