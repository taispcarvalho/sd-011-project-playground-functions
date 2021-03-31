// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return base * height / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let ajuda = '';
  let retorno = [];
  for (let index in frase){
    if (frase[index]!==' '){
      ajuda+=frase[index];
    }else{
      retorno.push(ajuda);
      ajuda=''
    }
    if (index == frase.length-1){
      retorno.push(ajuda);
      ajuda='';
    }
  }
  return retorno;
}

// Desafio 4
function concatName(frases) {
  // seu código aqui
  let primeiro='';
  let segundo='';
  let retorno='';
  primeiro=frases[frases.length-1];
  segundo=frases[0];
  retorno = primeiro + ", " + segundo;
  return retorno;
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins*3)+(ties*1);
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let ordem = numeros.sort();
  let maior = ordem[numeros.length-1];
  let retorno=0;
  for (let index in numeros ){
    if (numeros[index]===maior){
      retorno+=1;
    }
  }
  return retorno;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia1 < distancia2){
    return 'cat1';
  }else{
    if (distancia2 < distancia1){
      return 'cat2';
    }else{
      return 'os gatos trombam e o rato foge';
    }
  }
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
