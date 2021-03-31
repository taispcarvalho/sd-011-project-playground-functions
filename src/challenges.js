// Desafio 1
function compareTrue(pinky, cerebro) {
  if (pinky && cerebro) {
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
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if(Math.abs(distanceCat1) < Math.abs(distanceCat2)){
    return 'cat1';
  }else if(Math.abs(distanceCat2) < Math.abs(distanceCat1)){
    return 'cat2';
  }else if (Math.abs(distanceCat2) == Math.abs(distanceCat1)){
    return 'os gatos trombam e o rato foge';
  }

}
console.log(catAndMouse(5, 2, 12));

// Desafio 8
function fizzBuzz(numbers) {
  let newArray = []; 
  for (const key of numbers) {
           if(key % 3 === 0 &&  key % 5 === 0){
            newArray.push('fizzBuzz');
         }else if(key % 3 === 0){
           newArray.push('fizz');
        }else if (key % 5 === 0){
          newArray.push('buzz');
        }else{
          newArray.push('bug!');
        }
       }
      return newArray;
      }
     console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9
function encode(string) {
  let newString;
  for(let index = 0; index < string.length; index += 1){
    if(string[index] = 'a'){
      newString = string.replace('1');
    }
  }
  
}
console.log(encode('alo'));

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
