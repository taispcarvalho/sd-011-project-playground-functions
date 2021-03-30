// Desafio 1
function compareTrue(n, m) {
  // seu código aqui
  if (n === true && m === true){
    return true;
  }else if (n === true && m === false) {
    return false;
  }else if (n === false && m === true){
    return false;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangle = (base*height)/2;
  return triangle;
}

// Desafio 3
function splitSentence(text) {
  // seu código aqui
  let listText = text.split(' ');
  return listText;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let firstIndex = array[0];
  let lastIndex = array[array.length - 1];
  let textConcat = lastIndex + ', ' + firstIndex;
  return textConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let biggerNumber = 0;
  let countNumber = 0;

  for(let index =0; index < array.length; index+=1){
    if(array[index] > biggerNumber){
      biggerNumber = array[index];
    }
  }

  for(let index = 0; index < array.length; index+=1){
    if (array[index] === biggerNumber){
      countNumber+=1;
    }
    
  }

  return countNumber;
}

console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let longCat1 = 0;
  let longCat2 = 0;

  if(mouse>cat1){
    longCat1 = mouse - cat1;
  }else {
    longCat1 = cat1 - mouse;
  }

  if (mouse>cat2){
    longCat2 = mouse - cat2;
  }else {
    longCat2 = cat2 - mouse;
  }

  if (longCat1 < longCat2){
    return('cat1');
  }else if (longCat1 > longCat2){
    return('cat2');
  }else {
    return('os gatos trombam e o rato foge')
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayFizzBuzz = [];
  for (let index = 0; index<array.length;index+=1){
    if (array[index] % 3 === 0 && array[index] % 5 === 0){
      arrayFizzBuzz.push('fizzBuzz');
      }else if (array[index] % 5 === 0){
       arrayFizzBuzz.push('buzz')
      }else if (array[index] % 3 === 0){
       arrayFizzBuzz.push('fizz')
      }else {
        arrayFizzBuzz.push('bug');
      }
  }
  return arrayFizzBuzz
  }
  console.log(fizzBuzz([2, 15, 7, 9, 45]))


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
