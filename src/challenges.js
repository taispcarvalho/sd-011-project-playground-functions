// Desafio 1
function compareTrue(n, m) {
  // seu código aqui
  return n && m;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangle = (base * height) / 2;
  return triangle;
}

// Desafio 3
function splitSentence(text) {
  // seu código aqui
  let listText = text.split(' ');
  return listText;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let firstIndex = array[0];
  let lastIndex = array[array.length - 1];
  let textConcat = lastIndex + ', ' + firstIndex;
  return textConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let biggerNumber = 0;
  let countNumber = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > biggerNumber) {
      biggerNumber = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === biggerNumber) {
      countNumber += 1;
    }
  }
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let longCat1 = 0;
  let longCat2 = 0;

  if (mouse > cat1) {
    longCat1 = mouse - cat1;
  } else {
    longCat1 = cat1 - mouse;
  }
  if (mouse > cat2) {
    longCat2 = mouse - cat2;
  } else {
    longCat2 = cat2 - mouse;
  }
  if (longCat1 < longCat2) {
    return ('cat1');
  } if (longCat1 > longCat2) {
    return ('cat2');
  }
    return ('os gatos trombam e o rato foge');
}


// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayFizzBuzz = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
      console.log(array[index]);
    } else if (array[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
      console.log(array[index]);
    } else if (array[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
      console.log(array[index]);
    } else {
      arrayFizzBuzz.push('bug!');
      console.log(array[index]);
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(text) {
  // seu código aqui
  let encodeText = [];

  for (let index in text) {
    if (text[index] === 'a') {
      encodeText += '1';
    } else if (text[index] === 'e') {
      encodeText += '2';
    } else if (text[index] === 'i') {
      encodeText += '3';
    } else if (text[index] === 'o') {
      encodeText += '4';
    } else if (text[index] === 'u') {
      encodeText += '5';
    } else {
      encodeText += text[index];
    }
  }
  return encodeText;
}

function decode(text) {
  let decodeText = [];

  for (let index in text) {
    if (text[index] === '1') {
      decodeText += 'a';
    } else if (text[index] === '2') {
      decodeText += 'e';
    } else if (text[index] === '3') {
      decodeText += 'i';
    } else if (text[index] === '4') {
      decodeText += 'o';
    } else if (text[index] === '5') {
      decodeText += 'u';
    } else {
      decodeText += text[index];
    }
  }
  return decodeText;
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
