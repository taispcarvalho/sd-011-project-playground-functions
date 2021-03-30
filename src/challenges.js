// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 == true && valor2 == true){
    return true;
  }
  else{
    return false;
  }
  
}
console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base, high) {
  let area = 0;
  area = (base*high)/2;
  return area;
}
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(sentence, separator) {
  let arrayOfStrings = sentence.split(separator);
  return arrayOfStrings;
}

let string= "Desafio 3";
let space = " ";
console.log(splitSentence(string, space))

// Desafio 4
function concatName(param) {
  let newArray= [param[0],param[param.length-1]];
  return newArray;
}

let names = ["Walter", "Lucas", "Matheus", "Cadu"];
console.log(concatName(names));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
