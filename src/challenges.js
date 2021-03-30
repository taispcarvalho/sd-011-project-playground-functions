// Desafio 1
//criar uma função compareTrue, que recebe 2 parametros (a, b)
function compareTrue(a,b) {
  //SE o parametro (a) E o parametro (b) forem verdadeiros;
  if (a === true && b === true){
    //a função retorna verdadeiro;
    return true;
    //SE NÂO, retorna falso;
  } else {
    return false;
  }
}


// Desafio 2
//criar uma função calcArea que recebe dois parametros (base, height)
function calcArea(base, height) {
//sabemos que para calcular a área de um triangulo devemos multiplicar o height pela base e dividir por 2 (para isso vou usar o if);
if (calcArea = (base * height)/ 2){
  //retornar o resultado;
  return calcArea;
}
}


// Desafio 3
//criar uma função splitSentence que recebe uma string como parametro;
function splitSentence(string) {
  // retornar um array de strings separadas na string original, para isso usamos o .split.. no caso .split(' ') faz mais sentido por que separa cada palavra. 
  let array = string.split(" ");
  //retornar o array com o resultado;
  return array;
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

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
