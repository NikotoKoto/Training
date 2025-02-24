//Ecrivez un programme qui , à partir d'un ensemble  donné de puissances, identifie les deux puissances les plus proches et affiche leur ecart avec un nombre entier positif

const tab =[5,8,9,12]
let temp = 10000
for (let i = 1; i< tab.length ; i++){
    let gardeMem = Math.abs(tab[i-1] - tab[i])
    if(temp> gardeMem){
        temp = gardeMem
    }
}




