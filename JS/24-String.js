let text = prompt("Diguem una frase: ");

function mayus(text) {
    document.write(text.toUpperCase());
}

function minus(text) {
    document.write(text.toLowerCase());
}

function longitud(text) {
    document.write(text.length);
}

function paraules(text) {
    let txtDiv = text.split(" ");
    document.write(txtDiv.length);
}

function vocalsContingudes(text) {
    let vocals = /[aàáeèéiìíoóòuùú]/gi;
    let cont = 0;
    document.write(text.match(vocals));
}

function contVocals(text) {
    let vocals = /[aàáeèéiìíoóòuùú]/gi;
    let cont = 0;
    document.write(text.match(vocals).length);
}

function eliLletra(text) {
    let aux=text;
    for (let n = 1; n <= aux.length; n++) {
        document.write(text + "<br/>");
        text = text.substring(1);
    }
}