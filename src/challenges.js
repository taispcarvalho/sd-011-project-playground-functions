// Desafio 1
function compareTrue(parm1, parm2) {
  return parm1 && parm2;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(strArr) {
  return strArr[strArr.length - 1] + ', ' + strArr[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}


// Desafio 6
function highestCount(numbers) {
  let maior = 0;
  let contador = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
      maior = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === maior) {
      contador += 1;
    }
  }  
  return(contador);
}





// Desafio 7
function catAndMouse() {
  // seu código aqui
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
