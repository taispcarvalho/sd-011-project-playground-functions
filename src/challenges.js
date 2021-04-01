// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  let positions = [];
  let output = [];
  for(let i in string){
    if(string[i] === " "){
      positions.push(i);    //guarda posição dos separadores
    }
  }
  for(let n = 0; n <= positions.length; n+=1){
    //define intervalos envolvendo posicao dos separadores
    let start;
    let end;
    //inicio do intervalo
    if(n === 0){
      start = 0;
    }
    else{
      start = positions[n-1];
    }
    //fim do intervalo
    if(n === positions.length){
      end = string.length;
    }
    else{
      end = positions[n];
    }
    output.push(string.slice(start,end));
  }
  return output;
}
console.log(splitSentence("vamo que vamo"));

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
