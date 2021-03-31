// Desafio 1
function compareTrue(cond1, cond2) {
  // seu código aqui
  return cond1 && cond2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return (string.split(' '));
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return (`${array[array.length - 1]}, ${array[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highestNumber = array[0];
  let highestNumberCount = 0;
  for (let n of array) {
    if (n > highestNumber) {
      highestNumber = n;
      highestNumberCount = 0;
    }
    if (n === highestNumber) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let difMouseCat1 = Math.abs(mouse - cat1);
  let difMouseCat2 = Math.abs(mouse - cat2);
  if (difMouseCat1 < difMouseCat2) {
    return 'cat1';
  } if (difMouseCat2 < difMouseCat1) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resultArray = [];
  for (let n of array) {
    if (n % 3 === 0 && n % 5 === 0) {
      resultArray.push('fizzBuzz');
    } else if (n % 3 === 0 && n % 5 !== 0) {
      resultArray.push('fizz');
    } else if (n % 3 !== 0 && n % 5 === 0) {
      resultArray.push('buzz');
    } else {
      resultArray.push('bug!');
    }
  }
  return resultArray;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let dict = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  string = string.split('');
  for (let n in dict) {
    for (let n2 of string) {
      if (n2 === n) {
        let indexOfLetter = string.indexOf(n2);
        string[indexOfLetter] = dict[n];
      }
    }
  }
  return string.join('');
}

function decode(string) {
  // seu código aqui
  dict = { a: 1, e: 2, i: 3, o: 4, u: 5};
  string = string.split('');
  for (let n in dict) {
    for (let n2 of string) {
      if (n2 == dict[n]) {
        let indexOfLetter = string.indexOf(n2);
        string[indexOfLetter] = n;
      }  
    }
  }
  return string.join('');
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
