let num= prompt("Posa un numero del 1 al 10");
let a1=1;
let a2=1;


function fibonacci(num, a1, a2){
    console.log(`${a1}`);
    console.log(`${a2}`);
    for (let step=2; step < num; step++){
        let res= a1 +a2;
        a1=a2;
        a2=res;
        console.log(`${res}`);
    }
}


if(isNaN(num)){
    alert("No es un numero");
    location.reload();
}else{
    fibonacci(num, a1,a2);
}




