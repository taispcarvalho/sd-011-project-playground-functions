// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 == true && valor2 == true){
    return true;
  }
  else{
    return false;
  }
  
}
console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base, high) {
  let area = 0;
  area = (base*high)/2;
  return area;
}
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(sentence) {
  let arrayOfStrings = sentence.split(' ');
  return arrayOfStrings;
}

let string= 'Go Trybe';

console.log(splitSentence(string))

// Desafio 4
function concatName(param) {
  let newArray = param[param.length-1]+', '+param[0];
  return newArray;
}

let names = ['captain', 'my', 'captain'];
console.log(concatName(names));

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins=0;
  let pointsTies=0;
  pointsWins=wins*3;  
  pointsTies=ties*1;
  return totalPoints= pointsTies+pointsWins;

}

let numberWins=14;
let numberTies=8;
console.log(footballPoints(numberWins, numberTies));

// Desafio 6
function highestCount(array) {
  let maior =0;
  let contador = 0;
  for (let index=0; index<array.length; index +=1){
    if(array[index]>maior){
      maior = array[index];
    }
  }
  for (let index2=0; index2<array.length; index2 +=1){
    if(maior === array[index2]){
      contador = contador +1;
    }
  }
  console.log(maior);
  return contador;
}

let array6 = [0, 4, 4, 4, 9, 2, 1];
console.log(highestCount(array6));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {


  if(Math.abs(mouse-cat1)< Math.abs(mouse-cat2)){
    return "cat1";
  }

  else if(Math.abs(mouse-cat2)< Math.abs(mouse-cat1)){
    return "cat2";
  }
  else {
    return "os gatos trombam e o rato foge";
  }
}

let positionMouse = 0;
let positionCat1 =3;
let positionCat2 = 2;

console.log(catAndMouse(positionMouse,positionCat1,positionCat2));

// Desafio 8
function fizzBuzz(array){

let concatenatedArray = [];

for (let index = 0; index < array.length; index +=1){
  
  if(array[index]%3 === 0 && array[index]%5 === 0){
    concatenatedArray.push('fizzBuzz');
  }

  else if (array[index]%3 === 0){
    concatenatedArray.push('fizz'); 
  }
  
  else if(array[index]%5 === 0){
    concatenatedArray.push('buzz');
    }

  else {
    concatenatedArray.push('bug!');
  }
  }

  return concatenatedArray;
 
  }

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {

string = string.replace(/a/g,'1');
string = string.replace(/e/g,'2');
string = string.replace(/i/g,'3');
string = string.replace(/o/g,'4');
string = string.replace(/u/g,'5');

return string;
}
function decode(string2) {

string2 = string2.replace(/1/g,'a');
string2 = string2.replace(/2/g,'e');
string2 = string2.replace(/3/g,'i');
string2 = string2.replace(/4/g,'o');
string2 = string2.replace(/5/g,'u');

return string2;

}
console.log(encode('hi there!'));
console.log(decode('h3 th2r2!'));


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
