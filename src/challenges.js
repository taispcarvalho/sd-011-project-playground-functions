// Desafio 1
function compareTrue(var1, var2) {
  return var1 && var2;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  for (let index = 0; index < array.length; index += 1){
    return array = array[array.length - 1] + ', ' + array[0];
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(var1) {
  let resultado = 0;
  let number = 0;
  for (let index = 0; index < var1.length; index += 1) {
    if (var1[index] > number){
      number = var1[index];
    }
  }
  for (let index = 0; index < var1.length; index += 1) {
    if (number === var1[index]){
      resultado +=1;
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
    return 'cat1';
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  } 
}
// Desafio 8
function fizzBuzz(numbers) {
  let array = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      array.push('fizz');
    } else if (numbers[index] % 3 !== 0 && numbers[index] % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(var1) {
 
}
console.log(encode())
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
