// Desafio 1
const compareTrue = (boolean, boolean2) => {
  return boolean && boolean2
};

console.log(compareTrue(false, false));

// Desafio 2
const calcArea = (a, b) => {
  return (a * b) / 2;
}
console.log(calcArea(10, 20));

// Desafio 3
const splitSentence = (str) => {
  return str.split(" ")
}

console.log(splitSentence('Vamo que vamo'));

// Desafio 4
const concatName = (str) => {
  const lastStr = str[str.length - 1];
  const firstStr = str[0]
  return lastStr + ', ' + firstStr;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
const footballPoints = (wins, ties) => {
  const winsAmmount = wins * 3;
  const tiesAmmount = ties * 1;
  return winsAmmount + tiesAmmount;
}
console.log(footballPoints(1, 2));

// Desafio 6
const highestCount = (arr) => {
  let hightestNumber = Math.max.apply(null, arr);
  let count = 0;
  
  for (let i = 0; i < arr.length; i += 1) {
    if (hightestNumber === arr[i]) {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catAPos = Math.abs(mouse - cat1);
  let catBPos = Math.abs(mouse - cat2);
  if (catAPos < catBPos) {
    return "cat1";
  } else if (catBPos < catAPos) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(10, 13, 13));

// Desafio 8
const fizzBuzz = (arr) => {
  const arrayFizzBuzz = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      arrayFizzBuzz.push("fizzBuzz");
    } else if (arr[i] % 3 === 0) {
      arrayFizzBuzz.push("fizz");
    } else if (arr[i] % 5 === 0) {
      arrayFizzBuzz.push("buzz");
    } else {
      arrayFizzBuzz.push("bug!");
    }
  }
  return arrayFizzBuzz
}

console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(str) {
   let array = str.split('');

   for (let i = 0; i < array.lenth; i += 1) {
     if (array[i] === 'a') {
       array.splice(i, 1, '1');
     } else if (array[i] === 'e') {
       array.splice(i, 1, '2');
     } else if (array[i] === 'i') {
       array.splice(i, 1, '3');
     } else if (array[i] === 'o') {
       array.splice(i, 1, '4');
     } else if (array[i] === 'o') {
       array.splice(i, 1, '5');
     }
   }
   
   let codeStr = array.join('');
   return codeStr;
}


function decode(str) {
  let uncodeArray = str.split('');

  for (let i = 0; i < uncodeArray.length; i += 1) {
    if (uncodeArray[i] === '1') {
      uncodeArray.splice(i, 1, 'a');
    } else if (uncodeArray[i] === '2') {
      uncodeArray.splice(i, 1, 'e');
    } else if (uncodeArray[i] === '3') {
      uncodeArray.splice(i, 1, 'i');
    } else if (uncodeArray[i] === '4') {
      uncodeArray.splice(i, 1, 'o');
    } else if (uncodeArray[i] === '5') {
      uncodeArray.splice(i, 1, 'u');
    }
  }

  let uncodedStr = uncodeArray.join('');
  return uncodedStr;
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
