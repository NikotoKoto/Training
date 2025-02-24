export default function upperToLower(string){
    let temp='';
let caract = string.split('')
for(let i = 0; i< caract.length ; i++){
    if(caract[i] >= 'A' && caract[i] <= 'Z' )
{
    temp += String.fromCharCode(caract[i].charCodeAt(0) + 32);
}else{
    temp += caract[i]
}}
return temp
}

console.log(upperToLower("TOTOTZEFzdzesqc"))