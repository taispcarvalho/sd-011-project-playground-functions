// Desafio 1
function compareTrue(pinky, cerebro) {
  return pinky && cerebro;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let firstIndex = array[0];
  let lastIndex = array[array.length - 1];
  return (lastIndex + ', ' + firstIndex);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + ties);
  return (points);
}

// Desafio 6
function highestCount(arrayN) {
  let checkHighestNumber = Math.max.apply(null, arrayN);
  let checkRepetition = 0;
  for (let index = 0; index < arrayN.length; index += 1) {
    if (arrayN[index] === checkHighestNumber) {
      checkRepetition += 1;
    }
  }
  return checkRepetition;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if (Math.abs(distanceCat1) < Math.abs(distanceCat2)) {
    return 'cat1';
  } else if (Math.abs(distanceCat2) < Math.abs(distanceCat1)) {
    return 'cat2';
  } else if (Math.abs(distanceCat2) === Math.abs(distanceCat1)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let newArray = [];
  for (const key of numbers) {
    if (key % 3 === 0 && key % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (key % 3 === 0) {
      newArray.push('fizz');
    } else if (key % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ('a')) {
      string = string.replace('a', '1');
    } else if (string[index] === ('e')) {
      string = string.replace('e', '2');
    } else if (string[index] === ('i')) {
      string = string.replace('i', '3');
    } else if (string[index] === ('o')) {
      string = string.replace('o', '4');
    } else if (string[index] === ('u')) {
      string = string.replace('u', '5');
    }
  }
    return string;

}
console.log(encode('don juan o batedor de veias'));

function decode(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ('1')) {
      string = string.replace('1', 'a');
    } else if (string[index] === ('2')) {
      string = string.replace('2', 'e');
    } else if (string[index] === ('3')) {
      string = string.replace('3', 'i');
    } else if (string[index] === ('4')) {
      string = string.replace('4', 'o');
    } else if (string[index] === ('5')) {
      string = string.replace('5', 'u');
    }
  }
    return string;
}
console.log(decode('d4n j51n 4 b1t2d4r d2 v231s'));

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
