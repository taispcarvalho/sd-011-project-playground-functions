// Desafio 1
function compareTrue(bolean1, bolean2) {
  if (bolean1 && bolean2) {
    return true;
  }
  return false;
}


// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  return arr[arr.length-1] + ', ' + arr[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + ties;
}

// Desafio 6
function highestCount(arrNumber) {
  let highestRepet = 0;
  big = arrNumber[0];
  for (let index = 0; index < arrNumber; index += 1) {
    if(big < arrNumber[index]) {
      highestRepet = 1;
      big = arrNumber[index];
    }
    else if (big === arrNumber[index]) {
      highestRepet += 1;
    }
  }
  return highestRepet;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if(dist1 < dist2) {
    return cat2;
  }
  else if (dist1 > dist2) {
    return cat1;
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrNumber) {
  for(let index in arrNumber) {
    if (arrNumber[index] % 3 === 0 && arrNumber[index] % 5 === 0) {
      arrNumber[index] = 'fizzBuzz';
    }
    else if (arrNumber[index] % 3 === 0) {
      arrNumber[index] = 'fizz';
    }
    else if (arrNumber[index] % 5 === 0) {
      arrNumber[index] = 'buzz';
    }
    else {
      arrNumber[index] = 'bug!';
    }
  }
  return arrNumber;
}


function ehVogal(char, str) {
  for (let index = 0; index < str.length; index += 1) {
    if(char === str[index]) {
      return index+1;
    }
  }
  return false;
}

// Desafio 9
function encode(str) {
  let vogais = 'aeiou';
  let newStr = '';
  for (let index in str) {
    let vogalLetra = ehVogal(str[index], vogais)
    if (vogalLetra) {
      newStr += vogalLetra;
    }
    else {
      newStr += str[index];
    }
  }
  return newStr;
}

function ehNumber(char, str) {
  for (let index = 0; index < str.length; index += 1) {
    if(char === str[index]) {
      return str[index-1];
    }
  }
  return false;
}

function decode(str) {
  let vogais = '0a1e2i3o4u';
  let newStr = '';
  for (let index in str) {
    let vogalLetra = ehNumber(str[index], vogais)
    if (vogalLetra) {
      newStr += vogalLetra;
    }
    else {
      newStr += str[index];
    }
  }
  return newStr;
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
