// Desafio 1
function compareTrue(val1, val2) {
  
  if (val1 && val2) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  
  return area = (base * height) / 2;
}


// Desafio 3
function splitSentence(word) {

  return arrWord = word.split(' ');;
}

// Desafio 4
function concatName(arrWords) {
  
  return arrWords2 = arrWords[arrWords.length - 1] + ', ' + arrWords[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let hits = 0;
  return hits = (3 * wins) + ties;
}

// Desafio 6
function highestCount(arrNum) {
  
  arrNum.sort();
  let evenCount = 0; 

  for (let index = 0; index < arrNum.length; index += 1) {
    
    if (arrNum[index] === arrNum[index+1]) {
      evenCount += 1; 
    }
  }

  return evenCount + 1;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  let whoCatches = '';
  if ((cat1 - mouse) < (cat2 - mouse)) {
    whoCatches = 'cat1';
  }
  else if ((cat1 - mouse) > (cat2 - mouse)) {
    whoCatches = 'cat2';
  }
  else {
    whoCatches = 'os gatos trombam e o rato foge';
  }

  return whoCatches;
}

// Desafio 8
function fizzBuzz(arrNum) {
  
  let result = [];
  for (let index = 0; index < arrNum.length; index += 1) {
    
    if (arrNum[index] % 5 == 0 && arrNum[index] % 3 == 0) {
      result.push('fizzBuzz');
    }
    else if (arrNum[index] % 5 == 0) {
      result.push('buzz');
    }
    else if (arrNum[index] % 3 == 0) {
      result.push('fizz');
    }
    else {
      result.push('bug!');
    }
  }
  return result;
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
