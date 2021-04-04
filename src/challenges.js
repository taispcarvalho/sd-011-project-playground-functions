// Desafio 1
function compareTrue(valorA, valorB) {
  if (valorA && valorB === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(lista) {
  return `${lista[lista.length - 1]}, ${lista[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
function getHighestNumber(listaDeNumeros) {
  let maiorNumero = 0;
  for (let numeroAtual of listaDeNumeros) {
    console.log(numeroAtual);
    if (numeroAtual > maiorNumero) {
      maiorNumero = numeroAtual;
    }
  }
  return maiorNumero;
}
// Desafio 6
function highestCount(listaDeNumeros) {
  let contador = 0;
  const maiorNumero = getHighestNumber(listaDeNumeros);
  for (let numeroAtual of listaDeNumeros) {
    if (numeroAtual === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;
  if (distCat1 > distCat2) {
    return 'cat2';
  }
  if (distCat2 > distCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(lista) {
  let novaLista = [];
  for (let numeroAtual of lista) {
    if (numeroAtual % 3 == 0) {
      novaLista.push('fizz');
    }
    if (numeroAtual % 5 == 0) {
      novaLista.push('buzz');
    }
    if (novaLista % 15 == 0) {
      novaLista.push('fizzBuzz');
    } else {
      novaLista.push('bug!');
    }
  }
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
