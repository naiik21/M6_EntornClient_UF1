function dimecres(){
    //Variables
    let any1=parseInt(prompt("Diguem un any entre 2000 i 2050: "));
    let any2=parseInt(prompt("Diguem un altre any entre 2000 i 2050: "));
    var data1=new Date();
    var data2=new Date();
    let n=0;

    //Assignem els anys
    data1.setFullYear(any1);
    data2.setFullYear(any2);
 
    //Iterem per buscar quin any comença per dimecres entres els dos anys que s'han donat
    do{
        data1.setFullYear(any1+n);
        data1.setMonth(0);
        data1.setDate(1);
        if(data1.getFullYear()==data2.getFullYear()+1){
            console.log("No s'ha trobat cap any");
            return;
        }
        n++;
        
    }while(data1.getDay()!=3);
    console.log(data1.getFullYear());
}