/*//ex 01
let prenom = "Justin";

console.log(prenom);

//ex 02
let ville = "Montreal";

console.log(ville);

ville = "Victoriaville";

console.log(ville);

//ex 03
let age = 20;
let nom = "Lapointe";
let estConnecte = true;
console.table([age, nom, estConnecte]);
console.table({age: age});

//ex 04

const PI = 3.1416;
let rayon = 4;
let circonference = 2 * PI * rayon;

console.log("La circonférence d'un cercle ayant un rayon de 4cm est : ", circonference);
*/

//ex 01

var texte;

function log(texte) {
    console.log(texte);
}

log("allo");

//ex 02

var mois;

function saison(mois = mois.toLowerCase()) {
mois = mois.toLowerCase();

switch (mois) {
    case "decembre":
    case "janvier":
    case "fevrier":
     console.log("Hiver");
     break;
    case "mars":
    case "avril":
    case "mai":
     console.log("Printemps");
     break;
    case "juin":
    case "juillet":
    case "aout":
     console.log("ete");
     break;
    case "septembre":
    case "octobre":
    case "novembre":
     console.log("Automne");
     break;
    default:
     console.log("invalide!");
}
}

saison("JanVier");

//ex 03


const estMajeur = (age) => {
    if (age >= 18) {
        return true
    }
    return false;
}

if (() => { 
    estMajeur(17);} ) {

    console.log("Vous pouvez entrer");
} else {
    console.log("Vous ne pouvez pas entrer!");
}

//ex 04

var prenom = "";
var nom = "";


function bouton(prenom, nom) {
   prenom = prompt(prenom);
   nom = prompt(nom);

   alert("Bonjour " + prenom + " " + nom);
   
}

