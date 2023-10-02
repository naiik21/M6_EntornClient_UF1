function boton(){
    alert("Hola mundo");
}

function over(){
    alert("Sukeru");
}

function change(){
    alert(document.getElementById("cambio").value);
}

function multiplicar(){
    var num = document.getElementById("multi").value;
    for (let step=0; step <11; step++){
        console.log(num*step);
    }
}