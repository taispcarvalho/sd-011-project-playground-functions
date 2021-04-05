// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  let arrayOfStrings = string.split(' ');
  return arrayOfStrings;
}

// Desafio 4
function concatName(string) {
  let lastName = string[string.length - 1];
  let firstName = string[0];
  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoits = wins * 3;
  let tiesPoints = ties * 1;
  let total = winPoits + tiesPoints;
  return total;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let highNumber = 0;
  let repeteations = 0;
  for (let number of arrayOfNumbers) {
    if (number > highNumber) {
      highNumber = number;
      repeteations = 0;
    }
    if (highNumber === number) {
      repeteations += 1;
    }
  }
  return repeteations;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = cat1 - mouse;
  let cat2Distance = cat2 - mouse;
  if (cat1Distance < cat2Distance) {
    return "cat1";
  } else if (cat1Distance == cat2Distance) {
    return "os gatos trombam e o rato foge";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let response = [];
  for (number of numbersArray) {
    if (number % 3 == 0 && number % 5 == 0) {
      response.push('fizzBuzz')
    } else if (number % 5 == 0) {
      response.push('buzz')
    } else if (number % 3 == 0) {
      response.push('fizz')
    } else {
      response.push('bug!')
    }
  }
  return response;
}

// Desafio 9
function encode(string) {
  let stringEncoded = string;
  stringEncoded = stringEncoded.replace(/a/g, 1);
  stringEncoded = stringEncoded.replace(/e/g, 2);
  stringEncoded = stringEncoded.replace(/i/g, 3);
  stringEncoded = stringEncoded.replace(/o/g, 4);
  stringEncoded = stringEncoded.replace(/u/g, 5);
  return stringEncoded;
}

function decode(string) {
  let stringDecoded = string;
  stringDecoded = stringDecoded.replace(/1/g, 'a');
  stringDecoded = stringDecoded.replace(/2/g, 'e');
  stringDecoded = stringDecoded.replace(/3/g, 'i');
  stringDecoded = stringDecoded.replace(/4/g, 'o');
  stringDecoded = stringDecoded.replace(/5/g, 'u');
  return stringDecoded;
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
