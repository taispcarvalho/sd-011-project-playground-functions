// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let array = str.split(' ');
  return array;
}

// Desafio 4
function concatName(array2 = []) {
  return `${array2[array2.length - 1]}, ${array2[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(param) {
  let maiorNum = 0;
  let qtd = 0;

  for (let i = 0; i < param.length; i += 1) {
    if (param[i] > maiorNum) {
      maiorNum = param[i];
    }
  }
  for (let i = 0; i < param.length; i += 1) {    
    if (param[i] === maiorNum) {
      qtd += 1;
    }
  }
  return qtd;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1mouse = Math.abs(cat1 - mouse);
  let positionCat2mouse = Math.abs(cat2 - mouse);

  if (positionCat1mouse < positionCat2mouse) {
    return 'cat1';
  } else if (positionCat2mouse < positionCat1mouse) {
    return 'cat2';
  } else (positionCat1mouse === positionCat2mouse); {
    return 'os gatos trombam e o rato foge';
  }
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
