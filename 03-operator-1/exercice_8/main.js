// Exercice 8
// donnees de bases
const salaireMensuel = 500;
const augmentationSalaire = 0.10; // 10 %

// depenses de bases
const loyer = salaireMensuel * 0.3;
const nourriture = salaireMensuel * 0.2;
const transport = salaireMensuel * 0.1;
let autresDepenses = 50;
    autresDepenses += 25;
    loisirs = salaireMensuel * 0.15;

// calcul des depenses et reste
let totalDepenses = loyer + nourriture + transport + autresDepenses + loisirs;
let reste = salaireMensuel - totalDepenses;

// affichage des resultats
console.log("Total des depenses :" + totalDepenses + "$");
console.log("Reste :" + reste +"$");

// Calcul des pourcentages
let loyerPourcentage = (loyer / salaireMensuel) * 100;
let nourriturePourcentage = (nourriture /salaireMensuel) * 100;
let transportPourcentage = (transport / salaireMensuel) * 100;
let autresDepensesPourcentage = (autresDepenses / salaireMensuel) * 100;
let loisirsPourcentage = (loisirs / salaireMensuel) * 100;

// Affichage des résultats pourcentage
console.log("//avant augmentation");
console.log("Loyer : " + loyer + "$" + " (" + loyerPourcentage + "% du salaire)");
console.log("Nourriture : " + nourriture + "$" + " (" + nourriturePourcentage + "% du salaire)");
console.log("Transport : " + transport + "$" + " (" + transportPourcentage + "% du salaire)");
console.log("Autres depenses : " + autresDepenses + "$" + " (" + autresDepensesPourcentage + "% du salaire)");
console.log("Loisirs : " + loisirs + "$" + " (" + loisirsPourcentage + "% du salaire)");

// calcul du salaire augmente
let salaireAugmente = salaireMensuel * (1+ augmentationSalaire);
let nouveauReste = salaireAugmente - totalDepenses;

// recalcul des pourcentages

console.log("//apres augmentation");
console.log("nouveauSalaire : " + salaireAugmente + "$");


console.log("nouveau reste : " + nouveauReste + "$"); 
console.log("nouveaux pourcentage :")
console.log("Loyer : " + ((loyer / salaireAugmente) * 100). toFixed(1) + "% du salaire");
console.log("nourriture : " + ((nourriture / salaireAugmente) * 100). toFixed(1) + "% % du salaire");
console.log("transport : " + ((transport / salaireAugmente) * 100). toFixed(1) + "% % du salaire");
console.log("autres : " + ((autresDepenses / salaireAugmente) * 100). toFixed(1) + "% % du salaire");
console.log("loisirs : " + ((loisirs / salaireAugmente) * 100). toFixed(1) + "% % du salaire");



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




