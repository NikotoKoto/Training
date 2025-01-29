// Deviner un nombre entre 1 et 100? 

// Si il est trop petit on dit + sinon on dit -


//1 ere etape parametre à mettre dans l'algo

// tableau de 1 à 100
// et u nnombre à trouver 
const tab = new Array(100).fill().map( (x,i) => i+1);
const numberToGuess = Math.floor(Math.random() * 100);
console.log(tab)
console.log(numberToGuess)
// 2ieme etape Algorithme

function simpleSearch(tab,numberToGuess){
    for (let i = 0; i< tab.length ; i++){
        if (tab[i] === numberToGuess){
            return tab[i];
        }
    }
}

const result = simpleSearch(tab, numberToGuess);
console.log("result : " + result);