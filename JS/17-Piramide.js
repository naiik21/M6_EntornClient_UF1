function piramide() {
    // Variables 
    let base = 0;
    let alçada = 0;
    let auxA = 0;
    let auxB = 0;

    //Demanem la base de la piramide i assignem valors a les varaibles
    do {
        base = prompt("Diguem de la base de la piramide: ");
    } while ((base % 2) == 0)
    alçada = base / 2 + 0.5;
    auxA = alçada - 1;
    auxB = alçada - 1;
    auxC = alçada;

    // Creeem la taula
    let taula = document.createElement("table");
    taula.border = 1;

    // Itarem tant per la alçada com per la base 
    for (let n = 1; n <= alçada; n++) {
        var tr = document.createElement('tr');
        for (let i = 0; i < base; i++) {
            var td = document.createElement('td');
            td.style.width= '20px';
            td.style.height= '20px';
            td.style.backgroundColor = 'red';
            if (i < alçada) {
                mitad1(auxB, i, td);
            } else {
                mitad2(auxC, i, td);
            }


            tr.appendChild(td);
        }
        auxA = alçada - 1;
        auxB--;
        auxC++;
        taula.appendChild(tr);
    }
    document.body.appendChild(taula);
}

function mitad1(auxB, i, td) {
    pintaW(td);
    if (!(auxB > i)) {
        pintaR(td);
    }
}

function mitad2(auxC, i, td) {
    pintaR(td);
    if (!(auxC > i)) {
        pintaW(td);
    }
}


function pintaW(td) {
    td.style.backgroundColor = 'white';
}

function pintaR(td) {
    td.style.backgroundColor = 'red';
}
