function DiesTotal(){
    let num= parseInt(prompt("Diguem un numero de dies: "));
    let dies=num;
    let messos=0;
    let anys=0;

    anys=dies/365;
    dies%=365;
    messos=dies/30;
    dies%=30;


    console.log(num + " dies son un total de= " + parseInt(anys) + " anys " + parseInt(messos) + " messos " + parseInt(dies) + " dies");

}