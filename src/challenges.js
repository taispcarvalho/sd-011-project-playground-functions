// Desafio 1
function compareTrue(booleanOne, booleanTwo) {
  if(booleanOne === true && booleanTwo === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, high) {
  let area = (base * high) / 2;
  return area;  
}

console.log(calcArea(10, 50))

// Desafio 3
function splitSentence(initialStr) {
    let newArr;
    newArr = initialStr.split(' ');
    return newArr;
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(strArr) {
  let strGenerated = '';
  for (let index = 0; index <= strArr.length; index += 1){
    if (strArr[index] === 0) {
      strGenerated = strGenerated + strArr[index] + ' , ';
    } else if (strArr[index] === strArr.length) {
      strGenerated = strGenerated + strArr[index];
    } return strGenerated;
  } 
  
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

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
