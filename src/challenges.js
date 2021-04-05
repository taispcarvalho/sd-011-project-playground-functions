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
  if (cat1 < cat2) {
    return ('cat1');
  }
  if (cat1 > cat2) {
    return ('cat2');
  }
}
function troca(numero) {
  if (numero % 15 === 0) {
    return "fizzBuzz";
  }
  if (numero % 3 === 0) {
    return "fizz";
  } 
  if (numero % 5 === 0) {
    return "buzz";
  } 
  return 'bug!';
}
function fizzBuzz(numeros) {
  let codificado = [];
  for (let index = 0; index <= numeros.length - 1; index += 1) {
    codificado.push(troca(numeros[index]));
  }
  return (codificado);
}
  function encode(frase) {
  frase = frase.replace(/a/g, 1);
  frase = frase.replace(/e/g, 2);
  frase = frase.replace(/i/g, 3);
  frase = frase.replace(/o/g, 4);
  frase = frase.replace(/u/g, 5);
  return (frase);
}
function decode(frase) {
  frase = frase.replace(/1/g, 'a');
  frase = frase.replace(/2/g, 'e');
  frase = frase.replace(/3/g, 'i');
  frase = frase.replace(/4/g, 'o');
  frase = frase.replace(/5/g, 'u');
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
