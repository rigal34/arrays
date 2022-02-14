//écris comme cela permet d'être plus lisible dans mon navigateur
const listeMateriels = [
    "manométre numérique",
    "pompe à vide",
    "vacuométre",
    "thermométre",
    "rallonge 25m * 2",
];


console.log(listeMateriels);//affiche tout mes éléments

console.log(listeMateriels[4]);//affiche rallonge 25m * 2

listeMateriels[5] = "millebulles";//j'ai ajouté un éléments supplémentaire à mon tableau


//je fais un popup qui affichera mon matériel

const demandeMateriel = () => {
alert("Chef j'ai besoin d'un " + listeMateriels[0]);


};
//demandeMateriel();


console.log(listeMateriels.length);//permet de connaître le nombre d'éléments à mon tableau


//je vais faire un tri par ordre croissant alphabétique de mon tableau

console.log(listeMateriels.sort());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//tableau

let fruits = [
    "pomme",
    "banane",
];

console.log(fruits.length); //2

let premier = fruits[0];
console.log(premier);//pomme

let dernier = fruits[fruits.length -1];
console.log(dernier);//banane


fruits.forEach(function(bruno, rigal){
    console.log(bruno, rigal);
});
//pomme 0
//banane 1



//ajout en fin array
let ajout = fruits.push("orange");
console.log(fruits);//  [ "pomme", "banane", "orange" ]


let supressionDernier = fruits.pop();
console.log(fruits); // [ "pomme", "banane" ]


let supressionPremier = fruits.shift();
console.log(fruits);//[ "banane" ]

let ajoutDebut = fruits.unshift("framboise")
console.log(fruits);//[ "framboise", "banane" ]




//ajout de mangue
fruits.push("mangue");
console.log(fruits);// [ "framboise", "banane", "mangue" ]

let trouvIndex = fruits.indexOf("banane");
console.log(trouvIndex);//1


//supprime élément par son index par rapport à la position de la variable trouvIndex 

let supIndex = fruits.splice(trouvIndex,1)
console.log(fruits);//[ "framboise", "mangue" ]


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let legumes = ["navet", "thym", "radis", "carrote"];
console.log(legumes);

let position = 1, n = 2;

let supressionLegumes = legumes.splice(position, n);
console.log(legumes);//[ "navet", "carrote" ]
//1 définit à partir duquel élément on va le supprimer
//2 nombre d'élément que je supprime

console.log(supressionLegumes);//élément qui ont été suprimés [ "thym", "radis" ]



let arrayCopy = fruits.slice();
console.log(arrayCopy);// [ "framboise", "mangue" ]et allé me chercher le tableau fruit pour me le mettre dans la variable arrayCopy


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tableau = ["le premier élément", "le deuxième élément", "le dernier élément"];
console.log(tableau[0]);//le premier élément
console.log(tableau[1]);//le deuxième élément
console.log(tableau[tableau.length -1]);//le dernier élément



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let annees = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(annees[0]);//1950

console.log(annees[2]);//1970
console.log(annees["2"]);//1970
console.log(annees[02]);//1970
console.log(annees["02"]);//undefined
console.log(annees["2"] != annees["02"]);//true
console.log(annees["2"] != annees[02]);//false

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let promess = {
    "var": "texte",
    "array": [1, 2, 3, 4]
};
//attention au mot qui sont réservé a js il faut mettre les[]pour les consultés
console.log(promess["var"]);//texte

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let desFruits = [];
desFruits.push("banane", "pomme", "pêche");
console.log(desFruits.length);//3

desFruits[5] = "mangue";
console.log(desFruits[5]);//mangues
console.log(desFruits); //Array(6) [ "banane", "pomme", "pêche", <2 empty slots>, "mangue" ]
console.log(Object.keys(desFruits));//il m'affiche les index keys [ "0", "1", "2", "5" ]
console.log(desFruits.length);//6

//je peux modifier les propriétés des keys de mon tableau sans ajouter d'éléments
desFruits.length = 10;
console.log(Object.keys(desFruits));// [ "0", "1", "2", "5" ]
console.log(desFruits.length);//10

//par contre attention si on diminue le lenght on supprime des éléments
desFruits.length = 2;
console.log(Object.keys(desFruits));//[ "0", "1" ]
console.log(desFruits.length);//2

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Création d'un tableau utilisant le résultat d'une correspondance

let maRegexp = /d(b+)(d)/i;
let monTableau = maRegexp.exec("cdbBdbsbz");
console.log(monTableau);//[ "dbBd", "bB", "d" ]il prend index 0,puis index 1,puis index 2;


//ALLEZ SUR "Array -JavaScript MDN" pour des infos plus poussées




///PLUSIEURS FAÇONS DE SUPPRIMMER UN ELEMENTS D'UN TABLEAU 

//1 METHODE SPLICE

//MODIFIE LE TABLEAU

//RETOURNE UN TABLEAU AVEC LES ELEMENTS ENLEVÉS

const arr = ["a", "b", "c", "d"];


arr.splice(1,3,"Z");   //le 1er et l'index et le second et le nombre d'élément à supprimer ET JE PEUX EN RAJOUTER

//IL ME RETOURNE LES ÉLÉMENTS SUPPRIMÉS
console.log(arr.splice(1,3,"Z"));

console.log(arr);//[ "a", "c", "d" ]

// 2/3 . pop()& shift()
//trés bien pour les listes


const championLeague = [

    {name: "Bayern", rank: 1},
    {name: "Liverpool", rank: 2},
    {name: "Real Madrid", rank: 3},
    {name: "Manchester", rank: 4},
    {name: "FC Porto", rank: 5},
    {name: "Milan AC", rank: 6},
];


championLeague.pop();//enlève le dernier élément d'un tableau
console.log(championLeague);

championLeague.shift();//enlève le premier élément d'un tableau
console.log(championLeague);




//4.la méthode filter()

const tailles = [185, 165, 155, 198, 215, 175];

const grandesTailles = tailles.filter(mesure => 
    mesure >= 185);

    console.log(grandesTailles);//les dimensions comprise supérieur ou égal à 185




 //5. L'opérateur delete avec les tableaux m'oves idée

 const cars = ["Audi", "Ferrari", "BMW", "Toyota", "Mercerdes"];

 delete cars [2];
 console.log(cars);//m'affiche empty à l'élément que je viens de supprimer

 //pour les objets cela me fait disparaitre vraiment mon élément

 const objet = {
     a:5
 }

delete objet.a;

console.log(objet);//{}


//6.slice est utlisé pour extraire des tableaux
//sa va retourner un nouveau tableau à  partir d'une portion d'un tableau existant
const arbres = ["Chêne", "Bouleau", "Érable", "Hêtre"];

const slicedArr = arbres.slice(1);

console.log(slicedArr);//Array(3) [ "Bouleau", "Érable", "Hêtre" ]




//7. Créer une fonction custom

//pour supprimer des éléments

function supprimeTableauElement1(tableau,element){
    
    return tableau.filter(rigal => rigal !== element)
    //console.log(tableau);

    
}
console.log(supprimeTableauElement1([1,2,3], 2));//affiche Array [ 1, 3 ] cela à bien supprimé 2 tout en me retournant un nouveau tableau avec la méthode filter



////////////////////////////////////////////////////////////////////////

//pour suprimer des index 
//

function supprimeIndex(tableau, index){

    tableau.splice(index, 1);

    return tableau;
}

console.log(supprimeIndex(["a","b","c"],2)); //Array [ a, b ]ma garder la a et le c pour me supprimer index 2 



