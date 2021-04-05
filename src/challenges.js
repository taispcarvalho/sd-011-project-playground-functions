// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(splitPhase) {
  let splitArray = splitPhase.split(' ');
  return splitArray;
}

// Desafio 4

function concatName(nameArray) {
  let formatedString = `${nameArray[nameArray.length - 1]}, ${nameArray[0]}`;

  return formatedString;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arr) {
  let maior = arr[0];
  let cont = 1;

  for (let index = 1; index < arr.length; index += 1) {
    if (arr[index] > maior) {
      cont = 1;
      maior = arr[index];
    } else if (arr[index] === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catWins = '';
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    catWins = 'os gatos trombam e o rato foge';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    catWins = 'cat2';
  } else {
    catWins = 'cat1';
  }
  return catWins;
}
// Desafio 8
function fizzBuzz() {
  function condicao(arr) {
    for (let index = 0; index < arr.length; index += 1) {
      if (arr[index] % 5 === 0) {
        arr[index] = 'buzz';
      } else if (typeof arr[index] === 'number') {
        arr[index] = 'bug!';
      }
    }
    return arr;
  }

  function fizzBuzz(arr) {
    for (let index = 0; index < arr.length; index += 1) {
      if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
        arr[index] = 'fizzBuzz';
      } else if (arr[index] % 3 === 0) {
        arr[index] = 'fizz';
      }
    }

    arr = condicao(arr);
    return arr;
  }
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
