const arr = [50,22,1,23,12]


function insertSort (arr) {
   for (let i = 1 ; i<arr.length ; i++){
    const value = arr[i];
    let j;
    for ( j = i-1; j >= 0 && arr[j] > value ; j--){
        arr[j+1] = arr[j]
    }
    arr[j+1] = value
   }
}

insertSort(arr)
console.log(arr)

// Premiere boucle permet de parcourir le tableau avec un premier nombre à pointer à 1 ( on prendra donc le arr[1] = 22)
// On déclare une constante value qui récupere la valeur de notre arr[i] = 22
// On déclare une variable j
// Deuxieme boucle permet d'initialiser la boucle à i-1 donc à arr[0] =50, tant que j est supérieur ou EGALE à 0 et que arr[j](50) et plus grand que value (22) alors on décremente j de -1
// Tant que la boucle est vrai arr[j+1], arr[i] actuel prend la valeur de arr[j] donc arr[i] qui a une valeur de 22 prend maintenant la valeur 50
// Hop la boucle décremente et se trouve en dessous de zero on sort de la boucle.
// on dit que arr[j+1] donc j[-1] + j[+1] = j[0] prend la valeur de value qui est 22
// Nous avons donc au tableau :
// const arr = [22,50,1,23,12]