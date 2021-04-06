// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');  
}

// Desafio 4
function concatName(array) {
  let space = '';
  return space.concat(array[array.length-1] + ', ' + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let max = Math.max(...numbers); let count = 0;
  for (let num of numbers) {
    if (num === max) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse); let distanceCat2 = Math.abs(cat2 - mouse);
  let winnerCat
  if (distanceCat1 > distanceCat2) {
    winnerCat = 'cat2'
  } else if (distanceCat2 > distanceCat1) {
    winnerCat = 'cat1';
  } else if (distanceCat1 === distanceCat2) {
    winnerCat =  'os gatos trombam e o rato foge';
  }
  return winnerCat;
}

// Desafio 8
function fizzBuzz(numbers) {
  let strings = []
  for (let num of numbers) {
    if (num % 3 === 0 && num % 5 === 0) {
      strings.push("fizzBuzz")
    } else if (num % 5 === 0) {
      strings.push("buzz")
    } else if (num % 3 === 0) {
      strings.push("fizz")
    } else { strings.push("bug!")}
  }
  return strings
}

// Desafio 9
function encode(phrase) {
  let encodedPhrase = ''
  for (let letter of phrase) {
    if (letter === 'a') {
      encodedPhrase += '1'
    } else if (letter === 'e') {
      encodedPhrase += '2'
    } else if (letter === 'i') {
      encodedPhrase += '3'
    } else if (letter === 'o') {
      encodedPhrase += '4'
    } else if (letter === 'u') {
      encodedPhrase += '5'
    } else {
      encodedPhrase += letter
    }
  }
  return encodedPhrase
}

function decode(phrase) {
  let decodedPhrase = ''
  for (let letter of phrase) {
    
    if (letter === '1') {
      decodedPhrase += 'a'
    } else if (letter === '2') {
      decodedPhrase += 'e'
    } else if (letter === '3') {
      decodedPhrase += 'i'
    } else if (letter === '4') {
      decodedPhrase += 'o'
    } else if (letter === '5') {
      decodedPhrase += 'u'
    } else {
      decodedPhrase += letter
    }
  }
  return encodedPhrase
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
