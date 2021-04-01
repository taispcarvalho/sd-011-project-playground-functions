// Desafio 1
function compareTrue(paramX, paramY) {
  if ( paramX && paramY === true){
    return true;
  }

  else{
    return false;
  }

}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) /2;
    return area;
}

// Desafio 3
function splitSentence(stringToSplit) {
  let arrayOfStrings = stringToSplit.split(" ")
  return arrayOfStrings

}

// Desafio 4

function concatName(arrayStr) {
  arrayfl = arrayStr[arrayStr.length -1] + ', ' + [arrayStr [0]];
  return arrayfl;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties; 
  return points;
  }

// Desafio 6
function highestCount (numArray) {
  
  let maxNumber = Math.max.apply(null, numArray);
  let maxNumberRepeat = 0
  for (let index = 0; index < numArray.length; index += 1){;
    if(numArray[index] === maxNumber){
    maxNumberRepeat = maxNumberRepeat + 1
  }
}
return maxNumberRepeat
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
