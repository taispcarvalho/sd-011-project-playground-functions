// Desafio 1
function compareTrue(valueA, valueB) {

  if( valueA == true && valueB == true){
    return true;
  }
    else{
      return false;
    }
  }


console.log(compareTrue(false, true))

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2

}

console.log(calcArea(10,50));
console.log(calcArea(5,2));
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(string) {
  
  return string.split(" ")
  
  
}
console.log(splitSentence('go Trybe'))
console.log(splitSentence('Vamo que Vamo'))
console.log(splitSentence('foguete'))

// Desafio 4
function concatName(string) {
  
    let lastItem = string[string.length -1].toString()
    let firstItem=string[0].toString()
    let item = ( `${lastItem}, ${firstItem}`)
  return item;
}
  
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName( ['foguete', 'não', 'tem', 'ré']));
console.log(concatName( ['captain', 'my', 'captain']));


// Desafio 5
function footballPoints(wins, ties) {
  let winsScore = wins * 3;
  let tiesScore = ties;
  let countScore = winsScore + tiesScore;
  return countScore;
}

console.log(footballPoints(14,8));
console.log(footballPoints(1,2));
console.log(footballPoints(0,0));

// Desafio 6
function highestCount() {
  // seu código aqui
}

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
