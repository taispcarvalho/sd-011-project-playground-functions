function compareTrue(valor1, valor2) {
  return (valor1 && valor2);
}
function calcArea(base, altura) {
  let areaTriangulo = (base * altura) / 2;
  return (areaTriangulo);
}
function splitSentence(frase) {
  let separado = frase.split(' ');
  return (separado);
}
function concatName(lista) {
  let primPos = lista[0];
  let ultPos = lista[lista.length - 1];
  let resposta = ultPos.concat(', ', primPos);
  return (resposta);
}
function footballPoints(wins, ties) {
  let totalpoints = wins * 3 + ties;
  return (totalpoints);
}
function highestCount(valores) {
  let arrumado = valores.sort();
  let maior = arrumado[arrumado.length - 1];
  let quanVezes = 0;
  for (let index = 0; index <= valores.length - 1; index += 1) {
    if (valores[index] === maior) {
      quanVezes += 1;
    }
  }
  return (quanVezes);
}
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);
  if (cat1 === cat2) {
    return ('os gatos trombam e o rato foge');
  }
  (cat1 < cat2) ? 'cat1' : 'cat2';
  
} 
function fizzBuzz(numeros) {
  for (let index = 0;index <= numeros.length - 1;index += 1) {
    if (numeros[index] % 15 === 0) {
      numeros[index] = ('fizzBuzz'); 
    } else if (numeros[index] % 3 === 0) {
      numeros[index] = ('fizz');
    } else if (numeros[index] % 5 === 0) {
      numeros[index] = ('buzz');
    } else {
      numeros[index] = ('bug!');
    }
  }
  return (numeros);
}
function encode(frase) {
  frase = frase.replaceAll('a', 1);
  frase = frase.replaceAll('e', 2);
  frase = frase.replaceAll('i', 3);
  frase = frase.replaceAll('o', 4);
  frase = frase.replaceAll('u', 5);
  return (frase);
}
function decode(frase) {
  frase = frase.replaceAll('1', 'a');
  frase = frase.replaceAll('2', 'e');
  frase = frase.replaceAll('3', 'i');
  frase = frase.replaceAll('4', 'o');
  frase = frase.replaceAll('5', 'u');
  return (frase);
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
