//ex 01
var age = 20;

if (Number.isInteger(age) && age > 0) {
   if (age > 18) {
    console.log("Tu es majeur");
   } else {
    console.log("Tu est mineur");
   } 

} else {
    console.log("age invalide!");
}
   
//ex 02
var num = 45;
var type = (num % 2 === 0) ? "Pair" : "Impair";
console.log(type);

//ex 03

var note = 59;

if (note >= 90){
    console.log("excellent");
} else if (note < 90 && note >= 75){
    console.log("Tres bien!");
} else if (note < 75 && note >= 60) {
    console.log("Bien!");
} else {
    console.log("Echec!");
}

//ex 04

var temp = 12;

if (temp < 0) {
    console.log("il gele!");
} else if (temp >= 0 && temp <= 15) {
    console.log("il fait frais!");
} else if (temp > 15 && temp <= 25) {
    console.log("Temperature agreable!");
} else {
    console.log("il fait chaud!");
}

//ex 05

var connecte = true;
var role = "client";

switch (connecte && role) {
   case true && "admin":
    console.log("Bienvenue administrateur!");
    break;
   case true && "user":
    console.log("Bienvenue utilisateur!");
    break;
   case false:
    console.log("Acces refuse!");
    break;
   default:
    console.log("Bienvenue inconnu!");
    break;
}

//ex 06

var choix = 3;

switch (choix) {
   case 1:
    console.log("Nouvelle partie");
    break;
   case 2:
    console.log("charger une partie");
    break;
   case 3:
    console.log("Quitter");
    break
   default:
    console.log("Option invalide");
}

//ex 07

var mois = "ocTobRe";

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

