function MMMM(){
    let n1= parseInt(prompt("Diguem el primer numero "));
    let n2= parseInt(prompt("Diguem el primer segon "));
    let n3= parseInt(prompt("Diguem el primer tercer "));
    let nums= [n1, n2, n3];
    nums.sort();
    console.log("Mitja: " + (n1+n2+n3)/3);
    console.log("Mitjana: " + nums[1]);
    console.log("Major: " + nums[2]);
    console.log("Menor: " + nums[0]);
}