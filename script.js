//Exercice indiv Mastermind
// to do : drag and drop ??
import shuffleColor from "./test.js";
let texte = document.querySelector("#info");
// ______ETAPE 1______
let couleursAutorisees = {
  1: "rouge",
  2: "vert",
  3: "bleu",
  4: "jaune",
  5: "rose",
  6: "violet",
  7: "blanc",
  8: "orange",
};
// console.log(Object.values(couleursAutorisees));

let cachee = shuffleColor(couleursAutorisees);
console.log(cachee);

// let couleur1 = prompt("Quelle est la couleur de ton premier pion ?")
// let couleur2 = prompt("Quelle est la couleur de ton second pion ?")

// //VERIFIE QUE LA COULEUR EST AUTORISEE
function estValide(tableau) {
  return tableau.every((couleur) =>
    Object.values(couleursAutorisees).includes(couleur)
  );
}
// // console.log(estValide(essai1));

//COMPARE LE CODE SECRET ET LA PROPOSITION. RETOURNE UN BOOLEEN
function estCorrect(secret, proposition) {
  if (secret.length !== proposition.length) return false;

  return JSON.stringify(secret) === JSON.stringify(proposition);
}

let bouton = document.querySelector("#button");
bouton.addEventListener("click", partieDeJeu);
// RECUPERE INPUT DE L'UTILISATEUR ET LE TABLIFIE
function essaiCouleur() {
  let tabCouleur = [];
  let choixCouleur = document.querySelectorAll(".couleur");
  choixCouleur.forEach((couleur) => {
    tabCouleur.push(couleur.value);
  });
  return tabCouleur;
}

// INITIALISE LE NOMBRE DE TENTATIVES
let tentativesMax = 3;
let trouvé = false;

// GERE LE GAMEPLAY

function partieDeJeu() {
  let devineCouleur = essaiCouleur();
  if (estValide(devineCouleur)) {
    let tentative = estCorrect(cachee, devineCouleur);

    if (tentative) {
      texte.innerText = "Bravo";
      trouvé = true;
    } else {
      tentativesMax--;
      texte.innerText = `Essaie encore... il ne te reste plus que ${tentativesMax} tentative(s)`;
    }
    if (tentativesMax <= 0 && !trouvé) {
      texte.innerText = `C'est perdu... La combinaison était : ${cachee.join(
        ", "
      )}.`;
    }
  } else {
    texte.innerText = `INVALIDE`;
  }
}
