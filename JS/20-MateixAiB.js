function mateixAiB(){
    let txt= prompt("Diguem una frase: ");
    let a=0;
    let b=0;
    for(let n=0; n<txt.length; n++){
        if(txt[n].toLowerCase()=="a"){
            a++;
        }else if(txt[n].toLowerCase() =="b"){
            b++;
        }
    }
    if(a==b){
        console.log("Mateix numero de a i b");
    }else{
        console.log("Diferent numero de a i b");
    }
}