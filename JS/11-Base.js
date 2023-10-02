let num = parseInt(prompt("Diguem un numero: "));


function binari(num){
    if(num===0){
        console.log(num + " en base 10 es 0 en binari");
    }else if(num<0){
        console.log("ERROR");
    }else{
        let aux=num;
    let residu=0;
    let result="";
    while(aux>0){
        residu=Math.floor(aux%2);
        aux= Math.floor(aux/2);
        result= residu.toString() + result;
    }
    console.log(num + " en base 10 es " + result + " en binari");
    }
    
}

function octal(num){
    if(num===0){
        console.log(num + " en base 10 es 0 en octal");
    }else if(num<0){
        console.log("ERROR");
    }else{
    let aux=num;
    let residu=0;
    let result="";
    while(aux>0){
        residu=Math.floor(aux%8);
        aux= Math.floor(aux/8);
        result= residu.toString() + result;
    }
    console.log(num + " en base 10 es " + result + " en octal");
}
}

function hexadecimal(num){
    if(num===0){
        console.log(num + " en base 10 es 0 en hexadecimal");
    }else if(num<0){
        console.log("ERROR");
    }else{
    let aux=num;
    let residu=0;
    let result="";
    let nums= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    while(aux>0){
        residu=Math.floor(aux%16);
        aux= Math.floor(aux/16);
        result= nums[residu] + result;
    }
    console.log(num + " en base 10 es " + result + " en hexadecimal");
    }
}