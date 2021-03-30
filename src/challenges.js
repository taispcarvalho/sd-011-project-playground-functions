// Gustavo Zanette

// Desafio 1
function compareTrue(val1, val2) {
  return val1 && val2;
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
function concatName(fullName) {
  let signatureName = [];
  signatureName.push(fullName[fullName.length - 1], fullName[0]);

  return signatureName.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  // achar o maior --FEITO!
  let highestNumberFrequency = 0;
  let highestNumber = Math.max.apply(null, numbers);

  // contar quantas vezes o maior aparece
  for (const number of numbers) {
    if (number === highestNumber) {
      highestNumberFrequency += 1;
    }
  }

  return highestNumberFrequency;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // armazenar as respostas em outro array --FEITO!
  let numbersFizzed = [];
  // criar um for que passa por todos os elementos de numbers --FEITO!
  for (const number of numbers) {
    if (threeOrFive(number) === 3) {
      numbersFizzed.push('fizz');
    } else if (threeOrFive(number) === 5) {
      numbersFizzed.push('buzz');
    } else if (threeOrFive(number) === 'both') {
      numbersFizzed.push('fizzBuzz');
    } else {
      numbersFizzed.push('bug!');
    }
  }
  return numbersFizzed;
}

// essa função vai verificar se o número é divisível por 3 ou 5
// retornará 3, 5, 'both' ou 'neither'
function threeOrFive(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'both';
  } else if (number % 3 === 0) {
    return 3;
  } else if (number % 5 === 0) {
    return 5;
  } else {
    return 'neither';
  }
}

// Desafio 9

// vou utilizar objeto para guardar o 'dicionario' --FEITO!
// transformar phrase em array --FEITO!
// substituir cada letra no array pelo respectivo número no dictionary
// com um for percorrendo o array
// chamar pela forma de colchetes
function encode(phrase) {
  let individualChars = phrase.split('');
  dictionary = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let i = 0; i < individualChars.length; i++) {
    switch (individualChars[i]) {
      case 'a':
        individualChars[i] = 1;
        break;

      case 'e':
        individualChars[i] = 2;
        break;

      case 'i':
        individualChars[i] = 3;
        break;

      case 'o':
        individualChars[i] = 4;
        break;

      case 'u':
        individualChars[i] = 5;
        break;

      default:
        break;
    }
  }

  return individualChars.join('');
}

function decode(phrase) {
  let individualChars = phrase.split('');
  dictionary = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let i = 0; i < individualChars.length; i++) {
    switch (individualChars[i]) {
      case '1':
        individualChars[i] = 'a';
        break;

      case '2':
        individualChars[i] = 'e';
        break;

      case '3':
        individualChars[i] = 'i';
        break;

      case '4':
        individualChars[i] = 'o';
        break;

      case '5':
        individualChars[i] = 'u';
        break;

      default:
        break;
    }
  }

  return individualChars.join('');
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
