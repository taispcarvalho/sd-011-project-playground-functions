// dasafio 1 finalizado
// function compareTrue(case1, case2) {
//   if (case1 && case2 ){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(compareTrue(true, true));


// let base = 51;
// let altura = 1;

// function calcArea(base, height){
//   return (base * height) / 2;
// }
// console.log(calcArea(base, altura));


// let string = 'go Trybe'
// function splitSentence(frase){
//   return frase.split(" ");
// }
// console.log(splitSentence(string)); 

// let vetor = ['foguete', 'não', 'tem', 'ré'];

// function concatName(array) {
//   return array[array.length - 1] + ' , ' + array[0];
  
// }
// console.log(concatName(vetor));

// function footballPoints(wins, ties){
//   return (wins * 3) + ties
// }

// console.log(footballPoints(1, 2));
let vetor = [0, 0, 0];

// function highestCount (array){
  function highestNumber(array){
    let higherNum = 0;
    for (let index = 0; index < array.length; index += 1){
      if (array[index] > array[index + 1]){
        higherNum = array[index];
      }
    }
    return higherNum;
  }
  function countHigherNumber(array){
    let count = 0;
    for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1){
      if (array[secondIndex] === highestNumber(vetor)){
        count += 1;
      }
    }
    return count;
  }

  console.log(countHigherNumber(vetor))
  