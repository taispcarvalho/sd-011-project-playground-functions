// DESAFIO - 1 

// function compareTrue(case1, case2) {
//   if (case1 && case2 ){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(compareTrue(true, true));

// ===============================================================================

// DESAFIO - 2

// let base = 51;
// let altura = 1;

// function calcArea(base, height){
//   return (base * height) / 2;
// }
// console.log(calcArea(base, altura));

// ===============================================================================

// DESAFIO - 3

// let string = 'go Trybe'
// function splitSentence(frase){
//   return frase.split(" ");
// }
// console.log(splitSentence(string)); 

// ===============================================================================

// DESAFIO - 4

// let vetor = ['foguete', 'não', 'tem', 'ré'];

// function concatName(array) {
//   return array[array.length - 1] + ' , ' + array[0];
  
// }
// console.log(concatName(vetor));

// ===============================================================================

// DESAFIO - 5

// function footballPoints(wins, ties){
//   return (wins * 3) + ties
// }

// console.log(footballPoints(1, 2));

// ==================================================================================

// DESAFIO - 6

// let vetor = [0, 0, 0];

//   function highestNumber(array){
//     let higherNum = 0;
//     for (let index = 0; index < array.length; index += 1){
//       if (array[index] > array[index + 1]){
//         higherNum = array[index];
//       }
//     }
//     return higherNum;
//   }
//   function countHigherNumber(array){
//     let count = 0;
//     for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1){
//       if (array[secondIndex] === highestNumber(vetor)){
//         count += 1;
//       }
//     }
//     return count;
//   }

//   console.log(countHigherNumber(vetor))
  
// =================================================================================

// DESAFIO - 7

// function catAndMouse(mouse, cat1, cat2){
//   let distcat1 = mouse - cat1; 
//   let distcat2 = mouse - cat2;
//   if (distcat1 === distcat2){
//     return 'os gos gatos trombam e o rato foge';
//   }
//   else if (distcat1 < distcat2){
//     return 'cat1';
//   }
//   else{
//     return 'cat2'
//   }
// }
// console.log(catAndMouse(10, 2, 9));



// =================================================================================

// DESAFIO - 8
// let vetor = [2, 15, 7, 9, 45];

// function fizzBuzz(array) {
//   let stringResult = [];
//   for(let index = 0; index < array.length; index += 1) {
//     stringResult.push(checkDivider(array[index]));
//   }
//   return stringResult;
// }
// function checkDivider(value) {
//   if (value % 3 === 0 && value % 5 === 0) {
//     return 'fizzBuzz';
//   }
//   else if(value % 3 === 0){
//     return 'fizz';
//   }
//   else if(value % 5 === 0){
//     return 'buzz';
//   }
//   return 'bug!';
//   }

// console.log(fizzBuzz(vetor));




// =================================================================================

// DESAFIO - 9

function encode(string) {
    
    string = string.replace(/a/g, '1');
    string = string.replace(/e/g, '2');
    string = string.replace(/i/g, '3');
    string = string.replace(/o/g, '4');
    string = string.replace(/u/g, '5');
    return string;
  
}
console.log(encode('hi there'))

function decode(string) {
    
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;

}
console.log(decode('h3 th2r2'))


// =================================================================================

// DESAFIO - 10






// =================================================================================

// DESAFIO - 11





// =================================================================================

// DESAFIO - 12




// =================================================================================
