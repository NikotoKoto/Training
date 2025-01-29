const array = new Array(100).fill().map((x,i)=> i+1)
console.log("content of array: \n" + array)

const numberRandom = Math.floor(Math.random()*100);

console.log("nombre aleatoire : " + numberRandom)
let result ="";
let min = 0;
let max = array.length -1;
let countOfTry = 0;

while( min <= max){
let dif = Math.floor((min + max)/ 2);
if(numberRandom < dif){
max = dif -1;
countOfTry ++;
}else if ( numberRandom> dif){
    min = dif +1;
    countOfTry ++;
}else {
    result = dif;
    break;
}
}
console.log("The result is : " + result +
    "\n number of try is : "+ countOfTry
);




