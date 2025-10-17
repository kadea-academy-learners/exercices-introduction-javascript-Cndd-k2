// Exercice 8
const salaireMensuel = 500;
const loyer = salaireMensuel * 0.3;
const nourriture = salaireMensuel * 0.2;
const transport = salaireMensuel * 0.1;

let autresDepenses = 50;
    autresDepenses += 25;
let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;

console.log(totalDepenses)
console.log(reste)

function verifierReste(reste){
    if(reste>=100){
        console.log("budget bien gere");
    }else{
        console.log("attention serre")
    }
}
verifierReste(50);

function calcultotalDepenses(salaire, depenses){
    let reste = salaire - depenses;
    for(let i=1; i<=3; i++){
        console.log("votre reste est : " + reste)
    }
}




