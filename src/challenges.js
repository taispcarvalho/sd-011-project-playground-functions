// Desafio 1
function compareTrue(booleanOne, booleanTwo) {
  if(booleanOne === true && booleanTwo === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, high) {
  let area = (base * high) / 2;
  return area;  
}

console.log(calcArea(10, 50))

// Desafio 3
function splitSentence(initialStr) {
    let newArr;
    newArr = initialStr.split(' ');
    return newArr;
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(strArr) {
  let strGenerated = '';
  for (let index = strArr.length - 1; index >= 0; index -= 1){
    if (index === strArr.length - 1){
      strGenerated = strGenerated + strArr[index];
      strGenerated = strGenerated + ', ';
    } else if (index === 0) {
      strGenerated = strGenerated + strArr[index];
      break;
    }
  } return strGenerated;
}

console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3;
  let tiePoints = 1;
  let totalPoints = (winPoints * (wins) ) + (tiePoints * (ties));
  return totalPoints;
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestNumberFinder (arrNumbers){
  let highestNumber = 0;
  for (let index = 0; index < arrNumbers.length; index += 1){    
      if (arrNumbers[index] > arrNumbers[index + 1]){
        highestNumber = arrNumbers[index]
      }        
  } return highestNumber;
}
console.log(highestNumberFinder([9, 1, 2, 3, 9, 5, 7]));

function highestCount(arrNumbers2) {
  let highestNumber = highestNumberFinder(arrNumbers2);
  let count = 0;
  for (let index = 0; index < arrNumbers2.length; index += 1){
    if (arrNumbers2[index] === highestNumber){
      count += 1;
    }
  }
  return count;  
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = (cat1 - mouse) * (cat1 - mouse);
  let distanciaCat2 = (cat2 - mouse) * (cat2 - mouse);
  if (distanciaCat1 < distanciaCat2){
    return 'cat1';
  } else if ( distanciaCat1 > distanciaCat2){
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

console.log(catAndMouse(5, 15, 10))

// Desafio 8
function fizzBuzz(arrNumbers) {
  let newArrNumbers = [];
  for (let index = 0; index < arrNumbers.length; index += 1){
    if(arrNumbers[index] % 3 === 0 && arrNumbers[index] % 5 != 0) {
      newArrNumbers = newArrNumbers.push('fizz');
    } else if (arrNumbers[index] % 5 === 0 && arrNumbers[index] % 3 != 0) {
      newArrNumbers = newArrNumbers.push('buzz');
    } else if (arrNumbers[index] % 3 === 0 && arrNumbers[index] % 5 === 0) {
      newArrNumbers = newArrNumbers.push('fizzBuzz');
    } else {
      newArrNumbers = newArrNumbers.push('bug!');
    }
  } return newArrNumbers;
  
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
