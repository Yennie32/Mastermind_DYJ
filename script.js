//Exercice indiv Mastermind
// ______ETAPE 1______
let code = ["rouge", "vert", "bleu", "jaune"]
let essai1 = ["rouge","jaune"]
let combinaison=["rouge","jaune"]
//let couleur1 = prompt("Quelle est la couleur de ton premier pion?")
//let couleur2 = prompt("Quelle est la couleur de ton second pion?")

//todo fontion :Si la proposition est bien composée uniquement des 4 couleurs possibles et rien d’autre
function estValide(tableau) {
    return tableau.every(couleur => code.includes(couleur));
}
console.log(estValide(essai1));
 
//todo fonction : Une fonction qui retourne true ou false si la bonne combinaison est trouvée ou non
function estCorrect(secret,proposition) {
    if (secret.length!==proposition.length) return false;
    console.log(JSON.stringify(secret ));
    
    return JSON.stringify(secret)===JSON.stringify(proposition)
}
console.log(estCorrect(combinaison,essai1));



//todo fonction : Une fonction qui gère la partie (continuer tant que/fin si gagné)
function name(params) {

}





// let tableau1 = ["a", "b", "c", "d"]
// let tableau2 = ["a", "b", "3", "4"]

// let intersection = tableau1.filter(val => tableau2.includes(val))

// console.log(intersection)

//  ["a", "b"]