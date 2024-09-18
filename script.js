//Exercice indiv Mastermind
// ______ETAPE 1______
let code = ["rouge", "vert", "bleu", "jaune"]
let essai1 = ["rouge","jaune"]
let combinaison=[]
let couleur1 = prompt("Quelle est la couleur de ton premier pion ?")
let couleur2 = prompt("Quelle est la couleur de ton second pion ?")

//VERIFIE QUE LA COULEUR EST AUTORISEE
function estValide(tableau) {
    return tableau.every(couleur => code.includes(couleur));
}
console.log(estValide(essai1));
 
//COMPARE LE CODE SECRET ET LA PROPOSITION. RETOURNE UN BOOLEEN
function estCorrect(secret,proposition) {
    if (secret.length!==proposition.length) return false;
    console.log(JSON.stringify(secret ));
    
    return JSON.stringify(secret)===JSON.stringify(proposition)
}
console.log(estCorrect(essai1, combinaison));


// RECUPERE INPUT DE L'UTILISATEUR ET LE TABLIFIE
function essaiCouleur () {
    combinaison.push(couleur1, couleur2)
    return combinaison
}
console.log(essaiCouleur());


// INITIALISE LE NOMBRE DE TENTATIVES
const tentativesMax = 12
let tentatives = 0

// GERE LE GAMEPLAY
function partieDeJeu() {
    let devineCouleur =  essaiCouleur()
    while (tentatives <= tentativesMax || estCorrect(essai1, devineCouleur) === false){
        if(!estValide(devineCouleur)){
            alert("Tu dois choisir une couleur autorisée") 
        }  else {
            estCorrect(essai1, devineCouleur)
            tentatives ++
            console.log(tentatives);
            console.log(estCorrect(essai1, devineCouleur));     
        } if (tentatives === tentativesMax){
            alert("You lose, sucker !")
        } if (estCorrect(essai1, devineCouleur) ===true){
            alert("That's a good boy :)")

        }
    break
    }
}

partieDeJeu()



// let tableau1 = ["a", "b", "c", "d"]
// let tableau2 = ["a", "b", "3", "4"]

// let intersection = tableau1.filter(val => tableau2.includes(val))

// console.log(intersection)

//  ["a", "b"]