//Exercice indiv Mastermind
// ______ETAPE 1______
let couleursAutorisees = ["rouge", "vert", "bleu", "jaune"];
let combinaison = [];
let cachee = ["rouge", "jaune"];
// let couleur1 = prompt("Quelle est la couleur de ton premier pion ?")
// let couleur2 = prompt("Quelle est la couleur de ton second pion ?")

//VERIFIE QUE LA COULEUR EST AUTORISEE
function estValide(tableau) {
  return tableau.every((couleur) => couleursAutorisees.includes(couleur));
}
// console.log(estValide(essai1));

//COMPARE LE CODE SECRET ET LA PROPOSITION. RETOURNE UN BOOLEEN
function estCorrect(secret, proposition) {
  if (secret.length !== proposition.length) return false;

  return JSON.stringify(secret) === JSON.stringify(proposition);
}
// console.log(estCorrect(essai1, combinaison));

// RECUPERE INPUT DE L'UTILISATEUR ET LE TABLIFIE
function essaiCouleur() {
  let couleur1 = prompt("Couleur 1");
  let couleur2 = prompt("Couleur 2");
  combinaison.push(couleur1, couleur2);
  return combinaison;
}

// INITIALISE LE NOMBRE DE TENTATIVES

// GERE LE GAMEPLAY
function partieDeJeu() {
  let tentativesMax = 3;
  let trouvé = false;

  let devineCouleur = essaiCouleur();
  tentativesMax--;

  while (tentativesMax > 0 && !trouvé) {
    if (!estValide(devineCouleur)) {
      console.log("INVALIDE");
      devineCouleur = essaiCouleur();
      continue;
    }
    let tentative = estCorrect(cachee, devineCouleur);
    if (!tentative) {
      console.log("Try Again");
      tentativesMax--;
      devineCouleur = essaiCouleur();
    } else {
      console.log("Bravo");
      trouvé = true;
    }
  }
}

partieDeJeu();
