// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(strArray) {
  return `${strArray.slice(-1)}, ${strArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numArray) {
  let highestValue = Math.max.apply(null, numArray);
  let repeat = 0;
  for (let index = 0; index < numArray.length; index += 1) {
    if (highestValue === numArray[index]) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  if (positionCat1 === positionCat2) {
    return 'os gatos trombam e o rato foge';
  }else if (positionCat1 < positionCat2) {
    return 'cat1';
  }
  return 'cat2';
}
// Desafio 8
function fizzBuzz(numbers) {
  let results = [];
  for(let index= 0; index < numbers.length; index += 1){
   if(numbers[index] % 3 === 0 && numbers[index] % 5 !== 0){
     results.push('fizz');
   }else if(numbers[index] % 5 === 0 && numbers[index] % 3 !== 0){
     results.push('buzz');
   }else if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0 ){
     results.push('fizzBuzz');
   }else {
     results.push('bug!');
   }

  }
  return results;
}

// Desafio 9
function encode() {
  // seu código aqui
}

// Desafio 10 
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
