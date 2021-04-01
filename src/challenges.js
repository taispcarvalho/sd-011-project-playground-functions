// Desafio 1
function compareTrue(bool1, bool2) {
    if(bool1 && bool2 === true){
      return true
    } else {
      return false
    }
}

console.log(compareTrue(false, false))

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height)/2
  return areaTriangulo
}

console.log(calcArea(51,1))

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ')
}

console.log(splitSentence('foguete'))

// Desafio 4
function concatName(arrayOfStrings) {
  let lastFirst = arrayOfStrings[arrayOfStrings.length -1] + ', ' + arrayOfStrings[0]  
  return lastFirst
}

console.log(concatName(['captain', 'my', 'captain']))

// Desafio 5
function footballPoints(wins, ties) {
  let teamPoints = (wins * 3) + ties
  return teamPoints
}

console.log(footballPoints(0,0))

// Desafio 6
function highestCount(arrayOfNums) {
  let repeated = 0;
  let whosBigger = 0;

  for (let index = 0; index < arrayOfNums.length; index += 1) {
    if(arrayOfNums[index] > whosBigger) {
    whosBigger = arrayOfNums[index];
    }
  }

  for (let index = 0; index < arrayOfNums.length; index += 1) {
    if(arrayOfNums[index] === whosBigger) {
      repeated += 1;
    }
  }

  return repeated;
}

console.log(highestCount([0, 0, 0]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if(distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat1 === distanceCat2) {
    return "os gatos trombam e o rato foge"
  } else {
    return 'cat2';
  }  
}

console.log(catAndMouse(15,5,5))

// Desafio 8
function fizzBuzz(nums) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < nums.length; index += 1){
    if (nums[index] % 3 == 0 && nums[index] % 5 == 0) {
      arrayFizzBuzz.push('fizzBuzz')
    } else if(nums[index] % 3 == 0) {
      arrayFizzBuzz.push('fizz');
    } else if (nums[index] % 5 == 0){
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!')
    }
  }
  return arrayFizzBuzz;
}

console.log(fizzBuzz([9, 25]))

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
