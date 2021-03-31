// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// Consultei a documentação de W3Schools sobre método .split() para resolução deste problema.
// Link: https://www.w3schools.com/jsref/jsref_split.asp

function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
//* Obtive a ajuda do colega Renato Bispo para entender melhor a refatoração das funções. Imensamente agradecido!
//* A forma de fazer o if feita nas funções foi retirada de DevMedia.com.br
//* Source: https://www.devmedia.com.br/javascript-estrutura-condicional-if/40611#:~:text=A%20estrutura%20condicional%20if%20permite,uma%20determinada%20condi%C3%A7%C3%A3o%20for%20verdadeira.&text=Nesse%20exemplo%2C%20a%20instru%C3%A7%C3%A3o%20console,preco%20for%20maior%20que%20100.
function maxCount(numbers) {
  let highestNumber = 0;
  for (let arrayCount = 0; arrayCount < numbers.length; arrayCount += 1) {
    if (numbers[arrayCount] > highestNumber) highestNumber = numbers[arrayCount];
  }
  return highestNumber;
}

function highestCount(numbers) {
  let numMax = maxCount(numbers);
  let countNum = 0;
  for (let arrayCount = 0; arrayCount < numbers.length; arrayCount += 1) {
    if (numMax === numbers[arrayCount]) countNum += 1;
  }
  return countNum;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let distance1 = mouse - cat1;
  let distance2 = mouse - cat2;

  if (distance1 < distance2) {
    return cat1;
  } else if (distance1 > distance2) {
    return cat2;
  } else if (distance1 === distance2) {
    return ('os gatos trombam e o rato foge');
  }
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
