// Desafio 1
function compareTrue(param1, param2) {
  if (param1 == true && param2 == true){
   return true
  }
  else {
    return false
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
 let area = (base * height) / 2;
 return area;
}


// Desafio 3
function splitSentence(frase) {
let result = frase.split(" ");
return result;
}

// Desafio 4
function concatName(names) {
 let resultado = "";
 resultado = names[names.length -1] + ", " + names[0];
 return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
 let resultado;
 resultado = wins * 3 + ties * 1;
 return resultado;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  for (let index = 0; index < array.length; index +=1){
  if (array[index] > maior)
  maior = array[index];
  }
  let cont = 0;
  for (let index = 0; index < array.length; index +=1){
    if (array[index] === maior)
    cont += 1;
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  //let distCat1, distCat2;
  if (mouse + cat1 < mouse + cat2){
  return "cat1";
}
else if (mouse + cat1 > mouse + cat2) {
return "cat2";
}
else {
  return "os gatos trombam e o rato foge";
}
}

// Desafio 8
//array = [3, 5, 15, 7];
function fizzBuzz(array) {
  let resultado;
for (let index = 0; index < array.length; index += 1){
  if (array[index] % 3 === 0 && array[index] % 5 === 0){
    resultado += "fizzBuzz,";
  }
  else if (array[index] % 3 === 0){
    resultado += "fizz,";
  }
  else if (array[index] % 5 === 0){
    resultado += "buzz,";
  }
  else {
    resultado += "bug!";
  }
}
return resultado;
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
