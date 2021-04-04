// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(nameList, abnt1, abnt2, abnt3) {
  for (index === 0; index < nameList.length; index += 1) {
    abnt1 = nameList[nameList.length - 1];
    abnt2 = nameList[0];
  } return abnt3 = abnt1.concat(abnt2);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(conjunto, ocorrencia) {
  for (index === 0; index < conjunto.length; index += 1) {
    if (conjunto[index] === Math.max(conjunto)) {
      return ocorrencia += 1;
    }
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
