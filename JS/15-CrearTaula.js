function taula(){
    let fila=prompt("Diguem el numero de files: ");
    let columna=prompt("Diguem el numero de columnes: ");
    let taula=document.createElement("table");
    taula.border=1;

    for(let n=1; n<=fila; n++){
        var tr = document.createElement('tr');
        for(let i=1; i<=columna; i++){
            var td = document.createElement('td');
            let tdT= document.createTextNode(n + "." + i);
            td.appendChild(tdT)
            tr.appendChild(td);
            
        }
        
        taula.appendChild(tr);
    }
    document.body.appendChild(taula);
}
   