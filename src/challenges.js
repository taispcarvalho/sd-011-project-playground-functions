// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(frases) {
  return (frases[frases.length - 1] + ', ' + frases[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties));
}

// Desafio 6
function highestCount(numArray) {
  let ordenado = numArray.sort((numb1, numb2) => numb2 - numb1);
  let repeat = 0;
  for (let index = 0; index < ordenado.length; index +=1) {
    let element = ordenado[index];
    if (element === ordenado[0]) {
    repeat +=1;
   } else {
     break;
   }
 }
 return repeat
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;
  if (distanciaCat2 < distanciaCat1) {
    return 'cat2'
  } else if (distanciaCat1 < distanciaCat2) {
    return 'cat1'
  } else {
    return 'Os gatos trombam e o rato foge'
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
