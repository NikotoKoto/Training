const arr = [50,22,1,23,12]


function bubbleSort(arr) {
let len = arr.length

while(len > 0) {
    for ( let i =1 ; i < len ; i++){
        if(arr[i]< arr[i-1]){
            let temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
        }
    }
    len --
}
}
bubbleSort(arr)
console.log(arr)



// On déclare une variable len qui va prendre la taille du tableau arr.
// On déclare une boucle while qui tant que len est supérieur à 0 on ne sort pas de la boucle 
// On déclare une boucle for ou on l'initialise à 1 et on va parcourir tout le tableau
// CONDITION: Si arr[i] donc 22 comme i=1 est plus petit que arr[i-1] donc 50 alors :
// on déclare une variable temporaire qui garde en mémoire arr[i] donc 22
// on dit que arr[i] prendra maintenant la valeur de arr[i-1] donc 22
// On dit que arr[i-1] prendre la valeur de temp
// On se retrouve donc avec arr =[22,50,1,23,12]
// Puis on décremente len de 1 car la plus grosse valeur se retrouvera automatiquement à droite du tableau 