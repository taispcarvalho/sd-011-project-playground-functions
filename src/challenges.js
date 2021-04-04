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
  for (let index = 0; index < numArray.length; index += 1){
    if(numArray[index] === maxNumber){
    maxNumberRepeat = maxNumberRepeat + 1
  }
}
return maxNumberRepeat
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = mouse - cat1;
  let mouseCat2 = mouse - cat2
  if(Math.abs(mouseCat1) < Math.abs(mouseCat2)){
  return 'cat1'
  }

  else if(Math.abs(mouseCat2) < Math.abs(mouseCat1)) {
  return 'cat2'  
  }
  
  else{
    return 'os gatos trombam e o rato foge'
  }
}
// Desafio 8
function fizzBuzz(numberArray) {
  let comparation = []
  for (let index = 0; index < numberArray.length; index += 1){
    divisivel3 = numberArray[index] % 3;
    divisivel5 = numberArray[index] % 5;
    if(divisivel3 === 0 && divisivel5 === 0){
    comparation.push('fizzBuzz');
    }
    else if (divisivel3 === 0 && divisivel5 != 0){
      comparation.push('fizz');
    }
    else if (divisivel5 === 0 && divisivel3 != 0){
      comparation.push ('buzz');
    }
    else{
      comparation.push('bug!')
    }
    }
    return comparation; 
}

// Desafio 9
function encode(encodeText){
codeText = encodeText.replace(/u/g, '5')
                     .replace(/a/g, '1')
                     .replace(/e/g, '2')
                     .replace(/i/g, '3')
                     .replace(/o/g, '4')
                     .replace(/u/g, '5')
 return codeText
}
function decode(decodeText) {
  undecodeText = decodeText.replace(/5/g, 'u')
                       .replace(/1/g, 'a')
                       .replace(/2/g, 'e')
                       .replace(/3/g, 'i')
                       .replace(/4/g, 'o')
                       .replace(/5/g, 'u')
 return undecodeText
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
