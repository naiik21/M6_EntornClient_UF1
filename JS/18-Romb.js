// Pinta part superior esquerra
function supi(supI, i, td) {
    pintaW(td);
    if (!(supI > i)) {
        pintaR(td);
    }
}

// Pinta part superior dreta
function supd(supD, i, td) {
    pintaR(td);
    if (!(supD > i)) {
        pintaW(td);
    }
}

// Pinta part inferior esquerra
function infi(infI, i, td) {
    pintaR(td);
    if ((infI > i)) {
        pintaW(td);
    }
}

// Pinta part inferior dreta
function infd(infD, i, td) {
    pintaW(td);
    if ((infD > i)) {
        pintaR(td);
    }
}

//Pinta un td de blanc
function pintaW(td) {
    td.style.backgroundColor = 'white';
}

//Pinta un td de vermell
function pintaR(td) {
    td.style.backgroundColor = 'red';
}

function romb() {
    // Variables 
    let base = 0;
    let alçada = 0;
    let alçadaTotal = 0
    let aux = 0;
    let auxI = 0;
    let supI = 0;
    let supD = 0;
    let infI = 1;
    let infD = 0;
    let n;

    //Demanem la base de la piramide i assignem valors a les varaibles
    do {
        base = prompt("Diguem de la base de la piramide: ");
    } while ((base % 2) == 0)
    alçada = (base / 2 + 0.5);
    aux = alçada - 1;
    supI = alçada - 1;
    supD = alçada;
    alçadaTotal = alçada * 2;
    infD = alçadaTotal - 2;


    // Creeem la taula
    let taula = document.createElement("table");
    taula.border = 1;

    // Itarem tant per la alçada com per la base 
    for (n = 1; n < alçadaTotal; n++) {
        var tr = document.createElement('tr');
        for (let i = 0; i < base; i++) {
            auxI = i;
            var td = document.createElement('td');
            td.style.width = '20px';
            td.style.height = '20px';
            pintaR(td);

            if (n < alçada + 1) {
                if (i < alçada) {
                    supi(supI, i, td);
                } else {
                    supd(supD, i, td);
                }
            } else {
                if (i < alçada) {
                    infi(infI, i, td);

                } else {
                    infd(infD, i, td);
                }

            }
            tr.appendChild(td);
        }
        aux = alçada - 1;
        supI--;
        supD++;
        if (!(n < alçada + 1)) {
            infI++;
        }
        if (!(n < alçada + 1)) {
            if (!(auxI < alçada)) {
                infD--;
            }
        }
        taula.appendChild(tr);
    }
    document.body.appendChild(taula);
}


