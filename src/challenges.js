// Desafio 1
function compareTrue(firstValue, secondValue) {
  return firstValue && secondValue;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(concatArray) {
  let ultiConcatString = concatArray[concatArray.length - 1];
  let firstConcatString = concatArray[0];

  return `${ultiConcatString}, ${firstConcatString}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function funtionHigherNumber(repeatNumber) {
  let higherNumber = 0;
  for (let firstIndex = 0; firstIndex < repeatNumber.length; firstIndex += 1) {
    if (repeatNumber[firstIndex] > higherNumber) {
      higherNumber = repeatNumber[firstIndex];
    }
  }
  return higherNumber;
}

function highestCount(repeatNumber) {
  let higherNumber = funtionHigherNumber(repeatNumber);
  let counterNumber = 0;

  for (let secondIndex = 0; secondIndex < repeatNumber.length; secondIndex += 1) {
    if (higherNumber === repeatNumber[secondIndex]) {
      counterNumber += 1;
    }
  }
  return counterNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);

  if (positionCat1 < positionCat2) {
    return 'cat1';
  } if (positionCat2 < positionCat1) {
    return 'cat2';
  } if (positionCat1 === positionCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(parameterFizzBuzz) {
  let arrayFizzBuzz = [];
  for (let index in parameterFizzBuzz) {
    if (parameterFizzBuzz[index] % 3 === 0 && parameterFizzBuzz[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (parameterFizzBuzz[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (parameterFizzBuzz[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(phraseEncode) {
  let arrayEncode = [];
  let phraseEncodada = '';
  for (let index1 in phraseEncode) {
    arrayEncode.push(phraseEncode[index1]);
  }

  for (let index2 in phraseEncode) {
    switch (phraseEncode[index2]){
      case 'a':
        arrayEncode[index2] = '1';
        break;
      case 'e':
        arrayEncode[index2] = '2';
        break;
      case 'i':
        arrayEncode[index2] = '3';
        break;
      case 'o':
        arrayEncode[index2] = '4';
        break;
      case 'u':
        arrayEncode[index2] = '5';
        break;
      default:
        break;
    }
  }

  for (let index3 in arrayEncode) {
    phraseEncodada += arrayEncode[index3];
  }

  phraseEncode = phraseEncodada;

  return phraseEncode;
}

let a = 'hi there!';
console.log(encode(a));

function decode() {
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
