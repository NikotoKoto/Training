const arr = [50,22,1,23,12]

function selectionSort () {
    for (let i =0; i< arr.length-1; i++){
        let minIndex = i;
        for (let j = i+1; j<arr.length ; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        if(arr[minIndex] !== arr[i]){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    
}
selectionSort(arr)
    console.log(arr)
// Premiere boucle permet de parcourir le tableau avec un premier nombre à pointer ( on prendre le premier du tableau donc arr[0])
// On déclare une variable minIndex afin de pouvoir pointer dessus donc on attribut minIndex = i car dans la boucle nous initialisons la boucle à l'index 0 (i =0)
// Deuxieme boucle permet de parcourir le reste des valeurs du tableaux afin de savoir quelle valeur est la plus petite
// On initialise la boucle à i+1 car inutile de comparer deux fois la même valeur
// CONDITION: on compare la valeur dans le tableau de arr[minIndex] si elle est supérieur à arr[j]
// // Si oui alors minIndex pointera maintenant à l'index de J 
// Exemple: 1 ere iteration:
//             arr[minIndex] = 50 et arr[j] = 22 
//             22 < 50 donc minIndex pointera mainteant à 22 qui est arr[1]
// //Une fois la boucle ait terminé, nous ressortons minIndex pointant vers arr[2] = 1
// CONDITION: si i est différent de minIndex alors on attribut une valeur temporaire(temp)
// Celle ci va permettre de stocker la valeur de arr[i] = 50
// Puis nous disons à arr[i] de prendre la valeur que minIndex qui pointe (arr[i] = arr[minIndex])
// // Et nous allons dire à minIndex de prendre la valeur de temp qui pointe toujours en arr[2] mais avec la valeur 50.
// Ce qui nous donne en premiere itération de la première boucle: arr[1,22,50,23,12]
// Puis on recommence avec i= arr[1] = 22


