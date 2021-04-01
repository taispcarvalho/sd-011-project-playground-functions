// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  stringConvert = [];
  stringConvert = str.split(" ");
  return stringConvert;
}

// Desafio 4
function concatName(anyStr) {
  let lastName = anyStr[anyStr.length - 1];
  let firstName = anyStr[0];
  let fullName = lastName.concat(', ', firstName);
  return fullName;
}

// Desafio 5
function footballPoints(wins, ties) {
  totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(numberArray) {
  let maior = 0;
  let count = 0;
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] > maior) {
      maior = numberArray[index];
    } 
  }
  for (n in numberArray) {
    if (maior === numberArray[n]) { count += 1 }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catOne = Math.abs(cat1 - mouse);
  let catTwo = Math.abs(cat2 - mouse);
  if (catOne < catTwo) {
    return 'cat1';
  } else if (catTwo < catOne) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(fizzArray) {
  fizzList = [];
  for (n in fizzArray) {
    if ((fizzArray[n] % 3) === 0 && (fizzArray[n] % 5) === 0) {
      fizzList.push("fizzBuzz");
    } else if ((fizzArray[n] % 3) === 0) {
      fizzList.push("fizz");
    } else if ((fizzArray[n] % 5) === 0) {
      fizzList.push("buzz");
    } else {
      fizzList.push("bug!");
    }
  }
  return fizzList;
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
