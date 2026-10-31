
const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
  { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
  { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
  { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
];

// Vérifier les données d'un produit
function estValide(produit) {
  return (
    Number.isFinite(produit.prix) &&
    produit.prix >= 0 &&
    Number.isFinite(produit.stock) &&
    produit.stock >= 0
  );
}

// Garder uniquement les produits valides
const produitsValides = produits.filter(estValide);

// 1. Affichage du catalogue
console.log("=== Catalogue des produits ===");

produitsValides.forEach(produit => {
  console.log(`${produit.nom} - ${produit.prix} MAD`);
});

// 2. Rechercher les produits disponibles
const disponibles = produitsValides.filter(
  produit => produit.stock > 0
);

console.log("\n=== Produits disponibles ===");

disponibles.forEach(produit => {
  console.log(`${produit.nom} - Stock : ${produit.stock}`);
});

console.log(`Nombre de produits disponibles : ${disponibles.length}`);

// 3. Calculer la valeur totale du stock
const valeurStock = produitsValides.reduce(
  (total, produit) => total + produit.prix * produit.stock,
  0
);

console.log(`Valeur totale du stock : ${valeurStock} MAD`);

// 4. Trouver le produit disponible le moins cher
if (disponibles.length === 0) {
  console.log("Aucun produit disponible.");
} else {
  const moinsCher = disponibles.reduce((minimum, produit) =>
    produit.prix < minimum.prix ? produit : minimum
  );

  // Déstructuration des propriétés
  const { nom, prix } = moinsCher;

  console.log(`Produit disponible le moins cher : ${nom} (${prix} MAD)`);
}

// 5. Préparer un résumé avec map()
const resume = produitsValides.map(
  produit => `${produit.nom} - ${produit.prix} MAD - ${produit.stock} unités`
);

console.log("\n=== Résumé du catalogue ===");

resume.forEach(ligne => console.log(ligne));
