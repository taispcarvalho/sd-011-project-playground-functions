// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true) {
   return true
  } else {
   return false
 }
}
// Desafio 2
function calcArea(base,height) {
 var resul = (base * height)/2
 return resul
}

// Desafio 3
function splitSentence(string) {
  var arrayOfStrings = string.split(' ')
  return arrayOfStrings;
}

// Desafio 4
function concatName(name) {
 return (name[1] + ", " + name[-1])
}

// Desafio 5
function footballPoints(wins,ties) {
  var total = (wins * 3) + ties
  return total;
}

// Desafio 6
function highestCount(array) {
  let largo = Math.max(...array);
  let tamanho = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === largo) {
      tamanho += 1;
    }
  }
  return tamanho;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
let gato1 = cat1 - mouse;
let gato2 = cat2 - mouse; 

if (gato1 < 0) {
  gato1 = gato1 * -1;
}

if (gato2 < 0) {
  gato2 = gato2 * -1;
}

if (gato1 < gato2) {
  return 'cat1';
} else if (gato1 > gato2) {
  return 'cat2';
}else{
  return 'os gatos trombam e o rato foge'
}
}


// Desafio 8
function fizzBuzz(numbers) {
  function fizzBuzz(array) {
    let newArray = [];
    for (let index in array) {
      if (array[index] % 5 === 0 && array[index] % 3 === 0) {
        newArray.push('fizzBuzz');
      } else if (array[index] % 3 === 0) {
        newArray.push('fizz');
      } else if (array[index] % 5 === 0) {
        newArray.push('buzz');
      } else {
        newArray.push('bug!');
      }
    }
    return newArray;
}
}
console.log(fizzBuzz(5,12,3,4,6))
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
