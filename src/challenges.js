// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangle = (base * height) / 2;
  return areaTriangle;
}

// Desafio 3
function splitSentence(splitPhrase) {  
  let splitedArray = splitPhrase.split(' ');
  return splitedArray;
}

// Desafio 4
function concatName(arrayName) {
  let formatedName = arrayName[arrayName.length - 1] + ', ' + arrayName[0];
  return formatedName; 
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbersArray) {
  let number = {};
  let numCompare = 0;
  let highestNumber = 0;

  for (let i = 0; i < numbersArray.length; i += 1) {
    let val = numbersArray[i];
    if (number[val] === undefined) {
      number[val] = 1;
    } else {
      number[val] += 1;
    }
    if (number[val] > numCompare) {
      numCompare = number[val];
      highestNumber = numbersArray[i];
    }
  }
  return highestNumber;
}



// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let dist1 = mouse - cat1;
  let dist2 = mouse - cat2;
  if (dist1 < dist2){
    return 'cat1';
  } else if (dist1 > dist2){
    return 'cat2';
  } else {
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
