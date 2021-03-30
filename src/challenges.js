// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let answer = [];
  let word = '';

  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] == ' ' || index == sentence.length - 1) {
      if (index == sentence.length - 1) {
        word += sentence[index];
      }
      answer.push(word);
      word = '';
    } else {
      word += sentence[index];
    }  
  }

  return answer;
}

// Desafio 4
function concatName(names) {
  let answerArray = [];

  for (let name of names) {
    if (names.indexOf(name) == 0 || names.indexOf(name) == names.length - 1) {
      answerArray.push(name);
    }
  }

  return answerArray[1] + ', ' + answerArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
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
