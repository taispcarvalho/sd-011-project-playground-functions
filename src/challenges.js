// Desafio 1
function compareTrue(valor1, valor2) {
return valor1 && valor2
}
//console.log(compareTrue(false,true));

// Desafio 2
function calcArea(base, height) {
  if (area = (base * height) / 2){
    return area
  }  
}
//console.log(calcArea(51,1));

// Desafio 3
function splitSentence(array) {
let texto = array.split(' ');
 return texto
}
//console.log(splitSentence('foguete') );

// Desafio 4
function concatName(arr) {
 return `${arr[arr.length -1]}, ${arr[0]}`;
}  
let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
//console.log(concatName(nomes));

// Desafio 5
function footballPoints(wins, ties) {

  if (jogos = wins * 3 + ties *1){
  return jogos
  }else{
    jogos == 0 
    return jogos
  }
}
//console.log(footballPoints(14,8));

// Desafio 6
function highestCount(arr) {

let contador =  0
let numeroMaior = maximoNumero(arr);
  for (let index = 0; index < arr.length; index += 1) {
    if (numeroMaior === arr[index] ){
    contador += 1
    }

  }
  return contador;
} 

function maximoNumero(arr) {
  let numeroMaior = arr[0];
  for (let index = 1; index < arr.length; index += 1) {  
    if(numeroMaior < arr[index]){
      numeroMaior = arr[index];
    }
  }
 return numeroMaior
}

let arr = [9, 1, 2, 3, 9, 5, 7]
//console.log(highestCount(arr));


// Desafio 7
function catAndMouse(mousePosition, cat1Position, cat2Position ) {
 const dist1 = Math.abs(mousePosition - cat1Position)
 const dist2 = Math.abs(mousePosition - cat2Position) 
 if (dist1 > dist2){
   return 'cat2';
 } if (dist1 < dist2 ){
   return 'cat1'
 }else{
  return 'os gatos trobam e o rato foge'
}
}
//console.log(catAndMouse(0,0,0));

// Desafio 8
function fizzBuzz(arr){
  let arr1 = [];
  for (let number of arr){
    if (number % 3 === 0 && number % 5 === 0) {
      arr1.push('fizzBuzz');
    }else if (number % 3 === 0){
      arr1.push('fizz');
    }else if (number % 5 === 0){
      arr1.push('buzz');
    }else{
      arr1.push('bug!');
  } 
}
return arr1
}
arr1 = [2, 15, 7, 9, 45]
console.log(fizzBuzz(arr1) );

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
