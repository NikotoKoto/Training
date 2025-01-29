const arr = [50,22, 75,36,15]

function selecSort(){
for(let i =0; i <arr.length; i++){
    let minIndex= i;
    for(let j =i+1; j < arr.length; j++){
        if(arr[minIndex] > arr[j]){
            minIndex = j;
        }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}
}

selecSort(arr);
console.log(arr)




// const arr = [12,52,41,8,16]

// for (let i =0; i< arr.length ; i++){
//     for (let j = i+1 ; j< arr.length ;j++){
//        let index = arr[i]
//        let temp = arr[j]
//        if(temp < index){
//         arr[i] = temp
//         arr[j] = index
//        }
//     }
//     console.log(arr)
//     }
