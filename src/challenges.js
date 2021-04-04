// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA && valueB === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  // O método ultilizado abaixo consta na documentação do JavaScript
  // Esse método é usado para separar uma string em um array de acordo com separador, o usado abaixo foi para espaços (" ")

  return phrase.split(' ');
}

// Desafio 4
function concatName(string) {
  let firstName = string[0];
  let lastName = string[string.length - 1];
  let fullName = `${lastName}, ${firstName}`;

  return fullName;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function repeatNumber(number, maior) {
  let repeat = 0;

  for (let index = 0; index < number.length; index += 1) {
    if (maior === number[index]) {
      repeat += 1;
    }
  }
  return repeat;
}

function highestCount(number) {
  let maior = 0;

  for (let index = 0; index < number.length; index += 1) {
    if (number[index] > maior) {
      maior = number[index];
    }
  }
  return repeatNumber(number, maior);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzzValidation(anotherNumbers) {
  for (let index in anotherNumbers) {
    if (anotherNumbers[index] % 15 === 0) {
      anotherNumbers[index] = 'fizzbuzz';
    } else if (anotherNumbers[index] % 3 !== 0 && anotherNumbers[index] % 5 !== 0) {
      anotherNumbers[index] = 'bug!';
    }
  }
}
function fizzBuzz(numbers) {
  fizzBuzzValidation(numbers);
  for (let index in numbers) {
    if (numbers[index] % 5 === 0) {
      numbers[index] = 'buzz';
    } else if (numbers[index] % 3 === 0) {
      numbers[index] = 'fizz';
    }
  }
  return numbers;
}

// Desafio 9
function encode(encodeVowels) {
  for (let index = 0; index < encodeVowels.length; index += 1) {
    encodeVowels = encodeVowels.replace('a', 1);
    encodeVowels = encodeVowels.replace('e', 2);
    encodeVowels = encodeVowels.replace('i', 3);
    encodeVowels = encodeVowels.replace('o', 4);
    encodeVowels = encodeVowels.replace('u', 5);
  }

  return encodeVowels;
}

function decode(decodeVowels) {
  for (let index = 0; index < decodeVowels.length; index += 1) {
    decodeVowels = decodeVowels.replace(1, 'a');
    decodeVowels = decodeVowels.replace(2, 'e');
    decodeVowels = decodeVowels.replace(3, 'i');
    decodeVowels = decodeVowels.replace(4, 'o');
    decodeVowels = decodeVowels.replace(5, 'u');
  }
  return decodeVowels;
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
