// Desafio 1
function compareTrue(pinky, cerebro) {
  if (pinky === true && cerebro === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let firstIndex = array [0];
  let lastIndex = array [array.length - 1];
  return (lastIndex + ', ' + firstIndex);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + ties);
  return (points);   
}

// Desafio 6
function highestCount() {
 /* counter = [];
  let checkHighestNumber = Math.max(counter);
  return checkHighestNumber;
  for(let index = 0; index < counter.length; index =+ 1) {
    let checkRepetition = index;
    if (counter[index] === index) {
      index += 1;
      return checkRepetition
    }    
  }*/
}
 
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
}

// Desafio 8
function fizzBuzz(numbers) {
  
  for (let i = 0; i < numbers.length; i += 1){
        let checkIf =(numbers[i] % 3 === 0 &&  numbers[i] % 5 === 0);     
         if(checkIf === true){
           console.log('fizzBuzz')
         }else {
         if(numbers[i] % 3 === 0){
          console.log('fizz');
        }else if (numbers[i] % 5 === 0) {
          console.log('buzz');

        }else {
          console.log('bug!');
        }

      }
    }
    
}
 console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9
function encode() {
  
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
