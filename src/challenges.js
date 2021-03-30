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
