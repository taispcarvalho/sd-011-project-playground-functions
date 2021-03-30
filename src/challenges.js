// Desafio 1
function compareTrue(a, b) {
  return a && b;
}
let desafio1 = compareTrue(true, true);
console.log(desafio1);

// Desafio 2
function calcArea(base, height) {
  let step1 = base * height;
  let step2 = step1 / 2;
  return step2;
}
let desafio2 = calcArea(5, 10);
console.log(desafio2);

// Desafio 3
function splitSentence(string) {
  return string.split(' ')
}
let desafio3 = splitSentence('go trybe');
console.log(desafio3);

// Desafio 4
function concatName(listaDeNomes) {
  for (let i of listaDeNomes) {
    return listaDeNomes[listaDeNomes.length - 1] + ', ' + listaDeNomes[0];
  }
}
let desafio4 = concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
console.log(desafio4);

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  if (wins > 0 && ties > 0) {
    points = wins * 3 + ties;
  }
  return points;
}
let desafio5 = footballPoints(0, 0);
console.log(desafio5);

// Desafio 6
function highestNumber (listOfNumbers) {
  let highNumber = 0;
  for (let i = 0; i < listOfNumbers.length; i += 1) {
    if (listOfNumbers[i] > highNumber) {
      highNumber = listOfNumbers[i];
    }
  }
  return highNumber;
}


function highestCount(listOfNumbers) {
  let highest = highestNumber(listOfNumbers);
  let count = 0;
for (let i = 0; i < listOfNumbers.length; i += 1) {
  if (listOfNumbers[i] === highest) {
    count += 1;
  }
  }
  return count;
  }
  let teste6 = highestCount([0, 4, 4, 4, 9, 2, 1]);
  console.log(teste6);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;
    if (distanceCat1 < distanceCat2) {
      return 'cat1';
    } else if (distanceCat2 < distanceCat1) {
      return 'cat2';
    } else {
      return 'os gatos trombam e o rato foge';
    }
}
let desafio7 = catAndMouse(0, 6, 6);
console.log(desafio7);

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
