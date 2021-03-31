// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}
// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  let repetitions = 0;
  let highestNumber = Math.max(...numbers);
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] == highestNumber) repetitions += 1;
  }
  return repetitions;
}
console.log(highestCount([0,1,5,3,4,5,9,9]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) return 'os gatos trombam e o rato foge';
  if (cat1 - mouse < cat2 - mouse) return 'cat1';
  if (cat2 - mouse < cat1 - mouse) return 'cat2';
}

// Desafio 8
function fizzBuzzAux(numbers, index) {
  if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) numbers[index] = 'fizzBuzz';
  else if (numbers[index] % 3 === 0) numbers[index] = 'fizz';
  else if (numbers[index] % 5 === 0) numbers[index] = 'buzz';
  else numbers[index] = 'bug!';
  return numbers;
}
function fizzBuzz(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    numbers = fizzBuzzAux(numbers, index);
  }
  return numbers;
}

// Desafio 9
function encodeAux(sentence, index) {
  if (sentence[index] === 'a') sentence[index] = '1';
  if (sentence[index] === 'e') sentence[index] = '2';
  if (sentence[index] === 'i') sentence[index] = '3';
  if (sentence[index] === 'o') sentence[index] = '4';
  if (sentence[index] === 'u') sentence[index] = '5';
  return sentence;
}
function encode(sentence) {
  sentence = sentence.split('');
  for (let index = 0; index < sentence.length; index += 1) {
    sentence = encodeAux(sentence, index);
  }
  return sentence.join('');
}
function decodeAux(sentence, index) {
  if (sentence[index] === '1') sentence[index] = 'a';
  if (sentence[index] === '2') sentence[index] = 'e';
  if (sentence[index] === '3') sentence[index] = 'i';
  if (sentence[index] === '4') sentence[index] = 'o';
  if (sentence[index] === '5') sentence[index] = 'u';
  return sentence;
}
function decode(sentence) {
  sentence = sentence.split('');
  for (let index = 0; index < sentence.length; index += 1) {
    sentence = decodeAux(sentence, index);
  }
  return sentence.join('');
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
