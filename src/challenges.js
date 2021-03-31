// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true
  }  else{
    return false
  }                                                                                                                                                                           
} //console.log( compareTrue(true,true))

// Desafio 2
function calcArea(base, height) {
 return (base * height) / 2.
} //console.log(calcArea(10, 50))

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
} //console.log(splitSentence("go Trybe"))

// Desafio 4
function concatName(array) {
  return `${array[array.length-1]}, ${array[0]}`
} //console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 ) + ties
} console.log(footballPoints(14,8))

// Desafio 6
function highestCount(arra) {
    let moreNumber = 0
    let cont = 0
  for (let index = 0;index < arra.length; index += 1) {
    if (arra[index] >= moreNumber){
      moreNumber = arra[index]
      cont += 1
    }
  }
  return cont
  
} console.log( highestCount([ 9, 1, 2, 3, 9, 5, 7 ]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let run1 = Math.abs (mouse - cat1);
  let run2 = Math.abs (mouse - cat2);
  if (run2 > run1) {
    return 'cat1'
  } else if (run1 > run2){
    return 'cat2'
  } else { return`"os gatos trombam e o rato foge"`};
  
} console.log(catAndMouse(5, 2, 3))

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
