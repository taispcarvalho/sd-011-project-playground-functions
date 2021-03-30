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
  for (let index in arrNumber) {
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
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
