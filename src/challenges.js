// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

console.log(splitSentence('foguete marlon'));

// Desafio 4
let arrr = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(arr) {
  return arr[arr.length - 1].concat(', ', arr[0]);
}

console.log(concatName(arrr));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

console.log(footballPoints(7, 2));

// Desafio 6
function highestCount(arrNumber) {
  let nMaior = 0;
  let qRepeat = 0;

  for (let i = 0; i < arrNumber.length; i += 1) {
    if (arrNumber[i] >= nMaior) {
      nMaior = arrNumber[i];
    }
  }

  for (let i = 0; i < arrNumber.length; i += 1) {
    if (nMaior === arrNumber[i]) {
      qRepeat += 1;
    }
  }

  return qRepeat;
}

let numberr = [0, 4, 4, 4, 9, 2, 1];
console.log(highestCount(numberr));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let finish;

  let calc1 = Math.abs(cat1 - mouse);
  let calc2 = Math.abs(cat2 - mouse);

  console.log(calc1, calc2);

  if (calc1 > calc2) {
    finish = 'cat2';
  } else if (calc2 > calc1) {
    finish = 'cat1';
  } else {
    finish = 'os gatos trombam e o rato foge';
  }

  return finish;
}

console.log(catAndMouse(14, 12, 15));

// Desafio 8
function fizzBuzz(number) {
  let result = [];
  for (let index = 0; index < number.length; index += 1) {
    if ((number[index] % 3) === 0 && (number[index] % 5) === 0) {
      result.push('fizzBuzz');
    } else if ((number[index] % 3) === 0) {
      result.push('fizz');
    } else if ((number[index] % 5) === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

let num = [2, 15, 7, 9, 45];
console.log(fizzBuzz(num));
// Desafio 9
function retunrArr(s) {
  let arr = [];
  for (let index of s) {
    arr.push(index);
  }
  return arr;
}

function encode(string) {
  let vog = ['a', 'e', 'i', 'o', 'u'];
  let str = retunrArr(string);
  let nStr = '';

  for (let index = 0; index < str.length; index += 1) {
    for (let vIndex = 1; vIndex < vog.length; vIndex += 1) {
      if (str[index] === vog[vIndex]) {
        str[index] = vIndex + 1;
      }
    }
    nStr += ''.concat(str[index]);
  }
  return nStr;
}

let string = ['hi there!', 'h3 th2r2!'];
console.log(encode(string[0]));

function decode(string) {
  // seu código aqui
  let vog = ['a', 'e', 'i', 'o', 'u'];
  let str = retunrArr(string);
  let nStr = '';

  for (let index = 0; index < str.length; index += 1) {
    for (let vIndex = 1; vIndex < vog.length; vIndex += 1) {
      if (str[index] === vog[vIndex]) {
        str[index] = vog[vIndex];
      }
    }
    nStr += ''.concat(str[index]);
  }
  return nStr;
}

console.log(decode(string[0]));

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
