function dataAvui(){

    //Variables i assignació
    var data=new Date();
    var data1=new Date(data.getFullYear(), 0, 1);
    var data2=new Date();
    data2.setHours(0);
    data2.setMinutes(0);
    data2.setSeconds(0);
    data2.setMilliseconds(0);

    //Ex1
    console.log("Avui es " + data.getDate() + " del " + (data.getMonth()+1) + " del "+ data.getFullYear());

    //Ex2
    let numSets=Math.round(Math.abs((data1.getTime()-data.getTime())/604800000));
    console.log("Han passat  " + numSets + " setmanes de l'any");

    // Ex3
    let numDies=Math.abs((data1.getTime()-data.getTime())/86400000);
    let porDies=((numDies*100)/365).toFixed(2);
    console.log("El percentatge de dies trancorregut es " + porDies + "%");

    //Ex4
    let porRes=(100-porDies).toFixed(2);
    console.log("Queden un " + porRes + "% de dies d l'any");

    //Ex5
    console.log("Ara son les " + data.getHours() + ":" + data.getMinutes() + ":"+ data.getSeconds());

    //Ex6
    let secsDies=Math.abs((data2.getTime()-data.getTime()));
    let porDia=((secsDies*100)/86400000).toFixed(2);
    console.log("El percentatge de dies trancorregut es " + porDia + "%");

    //Ex7
    let porDiaRes=(100-porDia).toFixed(2);
    console.log("El percentatge de dies trancorregut es " + porDiaRes + "%");

}
