// Exercice 9
// Données de base
const maison = 60_000_000;
const terrains = 40_000_000;
const liquidites = 20_000_000;

const totalPatrimoine = maison + terrains + liquidites;

// Règles
const partPremiereCategorie = 0.75; // enfants (ou représentation)
const partDeuxiemeCategorie = 0.25; // conjoint + frères/soeurs (ou représentation)

// --- Calculs de base
const enveloppeEnfants = totalPatrimoine * partPremiereCategorie;    // 75%
const enveloppeConjointFratrie = totalPatrimoine * partDeuxiemeCategorie; // 25%

// Première catégorie : 3 "branches" (Paul, Marie, Alain)
const branchesEnfants = 3;
const partParBranche = enveloppeEnfants / branchesEnfants;

// Détails de la branche d'Alain (2 enfants : Eric, Claire)
const partEric = partParBranche / 2;
const partClaire = partParBranche / 2;

// Deuxième catégorie : 3 personnes (Madame MUKUNA, Joseph, Sarah)
const personnesDeuxiemeCat = 3;
const partDeuxiemeParPersonne = enveloppeConjointFratrie / personnesDeuxiemeCat;

// Résultats
const resultats = {
  "Paul": partParBranche,
  "Marie": partParBranche,
  "Éric": partEric,
  "Claire": partClaire,
  "Madame MUKUNA": partDeuxiemeParPersonne,
  "Joseph": partDeuxiemeParPersonne,
  "Sarah": partDeuxiemeParPersonne
};

// Affichage formaté
const fmt = new Intl.NumberFormat("fr-CD");
console.log("=== Répartition de l'héritage (CDF) ===");
console.log("Patrimoine total :", fmt.format(totalPatrimoine), "CDF\n");

for (const [nom, montant] of Object.entries(resultats)) 
  console.log(`${nom} : ${fmt.format(montant)} CDF`);
