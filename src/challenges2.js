// Desafio 10

function techList(learningTechnology, name) {
  let outExit = [];
  if (learningTechnology.length === 0)
  return 'Vazio!'
  for (let key of learningTechnology.sort()) {
  outExit.push({tech: key, name: name}); 
  } 
  return outExit;
} 

// Desafio 11
let numbers1 = [1, 9, 3, 4, 6, 6, 7, 5, 9, 0, 1];
let response;
let result = 0;
let error;
for (let index = 0; index < numbers1.length; index += 1){
if (numbers1[index] === response){
  result += 1;
  }
}
  for (let i of numbers) { 
  if (numbers1[i] < 0 || numbers1[i] > 9 || result > 2){
  error = 'não é possivel gerar um número de telefone com esses valores';
} else {
  
}
console.log(error);

function generatePhoneNumber(number1) {
  let number1 = 
  if (number1.length !== 11) { 
    return 'Array com tamanho incorreto'
  }
  return `(${number1[0]}${number1[1]})${number1[2]}${number1[3]}${number1[4]}${number1[5]}${number1[6]}-${number1[7]}${number1[8]}${number1[9]}${number1[10]}`
 }

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let sizeLineA = Math.abs(lineA + lineB);
  let sizeLineB = Math.abs(lineA - lineB);
  let response = false;
  if (lineC < sizeLineA && lineC > sizeLineB) {
    response = true;
  } else {
    response = false;
  }
  return response;
}

// Desafio 13
let shoop = '1 cerveja';
function hydrate() {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
