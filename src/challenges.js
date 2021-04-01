// Desafio 1.0
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(array) {
  array = array.split(' ');
  return array;
}

// Desafio 4
function concatName(array2) {
  let first = array2[0];
  let last = array2[array2.length - 1];
  return last + ', ' + first;
}

// Desafio 5
function footballPoints(win, ties) {
  return (win * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numeros) {
  let ordem = numeros.sort();
  let maior = ordem[numeros.length - 1];
  let retorno = 0;
  for (let index in numeros) {
    if (numeros[index] === maior) {
      retorno += 1;
    }
  }
  return retorno;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia_cat1;
  let distancia_cat2;
  
  if (mouse < cat1) {
    distancia_cat1 = (cat1 - mouse);
}
else if (mouse > cat1) {
    distancia_cat1 = (mouse - cat1);
}
else (mouse === cat1); {
    distancia_cat1 = (mouse - cat1); //isso vai dar 0
}
if (mouse < cat2) {
    distancia_cat2 = (cat2 - mouse);
}
else if  (mouse > cat2) {
    distancia_cat2 = (mouse - cat2);
}
else (mouse === cat2); {
    distancia_cat2 = (mouse - cat2); //isso vai dar 0
}
if (distancia_cat1 < distancia_cat2) {
    return cat1;
}
else if (distancia_cat1 > distancia_cat2) {
   return cat2;
}
else (distancia_cat1 === distancia_cat2) {
 return "os gatos trombam e o rato foge";
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
