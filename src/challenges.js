// Desafio 1
function compareTrue(a, b) {
  let value1 = a;
  let value2 = b;
  return a && b;
}

// Desafio 2
function calcArea(a, b) {
  let base = a;
  let heigth = b;
  return a * b / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(strings) {
  let firstString = strings[0];
  let lastString = strings[strings.length - 1];
  return lastString + ', ' + firstString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let highestNumber = 0;
  for (let index of numeros) {
    if (index > highestNumber) {
      highestNumber = index;
    }  
  }
let counter = 0;
for (let index2 in numeros) {
  if (numeros[index2] === highestNumber) {
    counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 === distanceCat2) {
    return "os gatos trombam e o rato foge";
  } else if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  return 'cat1'; 
}

// Desafio 8
function fizzBuzz(array) {
  for (let i = 0; i < array.length; i += 1) {
    switch (true) {
      case array[i] % 3 === 0 && array[i] % 5 === 0:
        array[i] = 'fizzBuzz';
        break;
      case array[i] % 5 === 0:
        array[i] = 'buzz';
        break;
      case array[i] % 3 === 0:
        array[i] = 'fizz';
        break;
      default:
        array[i] = 'bug!'
        break;
    }
  }
  return array; 
}

// Desafio 9
function encode(array1) {
  let result = '';
  for (let i = 0; i < array1.length; i += 1) {
    switch (true) {
      case array1[i] === 'a':
        result += '1';
        break;
      case array1[i] === 'e':
        result += '2';
        break;
      case array1[i] === 'i':
        result += '3';
        break;
      case array1[i] === 'o':
        result += '4';
        break;
      case array1[i] === 'u':
        result += '5';
        break;

      default:
        result += array1[i];
        break;
    }
  }
  return result;
}

function decode(array2) {
  let result2 = '';
  for (let index = 0; index < array2.length; index += 1) {
    switch (true) {
      case array2[index] === '1':
        result2 += 'a';
        break;
      case array2[index] === '2':
        result2 += 'e';
        break;
      case array2[index] === '3':
        result2 += 'i';
        break;
      case array2[index] === '4':
        result2 += 'o';
        break;
      case array2[index] === '5':
        result2 += 'u';
        break;

      default:
        result2 += array2[index];
        break;
    }
  }
  return result2;
}
console.log(decode("h3 th2r2!")); 

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
