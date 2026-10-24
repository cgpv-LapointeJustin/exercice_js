//ex 01

var noms = ["Justin", "Mathis", "Frank", "John", "Felix"];

noms.push("Tom");
noms.unshift("Louis");

/*for (let i = 0; i < noms.length; i++) {
     console.log(noms[i]); 
}*/

/*
for (var nom of noms) {
    console.log(nom);
}
*/

noms.forEach(nom => {
    console.log(nom);
});

//ex 02

var notes = [85, 42, 67, 90, 58, 73];

var nNotes = notes.filter((correct) =>  {
    return correct >= 60;  
})

dNote = nNotes[nNotes.length - 1];

console.log(nNotes);
console.log(dNote);


//ex 03

var prix = [10, 25, 30, 5, 15];

var prixTaxes = prix.map((produit) => {
  return produit * 1.15;
});

console.log(prix);
console.log(prixTaxes);

//ex 04
var nombres = [2, 5, 8, 11, 14, 17];

var pairs = nombres.filter((pair) => {
    return pair % 2 == 0;
});

console.log(pairs);

var mult = pairs.map((pair) => {
    return pair * 3;
});

console.log(mult);

//ex 05

let produits = [
  { nom: "Chocolat", prix: 3 },
  { nom: "Chips", prix: 2 },
  { nom: "Café", prix: 8 },
  { nom: "Pain", prix: 4 }
];



var produitsAbordables = produits.filter((prod) => { 
    if (prod.prix < 5)
    {
        return prod.nom;
    }
});


var nomPA = produitsAbordables.map((prod) => {
   return prod.nom;
});
    
console.log(produitsAbordables);
console.log(nomPA);