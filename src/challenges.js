// Desafio 1
function compareTrue(parm1, parm2) {
 return parm1 && parm2;  
}

// Desafio 2
function calcArea(base, altura) {
 return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
 return frase.split(" "); 
}

// Desafio 4
let nome = ['ola', 'tudo', 'bem', 'com', 'voce']
function concatName(strArr) { 
 return strArr[strArr.length - 1] +', '+ strArr[0]; 
}
console.log(concatName(nome)); 

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}


// Desafio 6
highestCount[9, 1, 2, 3, 9, 5, 7]
function highestCount(numbers) {
  for (let numbers of highestCount){
    console.log(numbers)
  }  
}


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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
