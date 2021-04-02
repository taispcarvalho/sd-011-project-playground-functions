function compareTrue(valor1, valor2) {
  return (valor1 && valor2);
}

function calcArea(base, altura) {
  let areaTriangulo = (base * altura) / 2;
  return (areaTriangulo);
}

function splitSentence(frase){
  let separado = frase.split(' ');
  return (separado);
}

function concatName(lista){
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
  for (let index = 0; index <= valores.length - 1; index++) {
    if (valores[index] === maior) {
      quanVezes++;
    } 
  } 
  return (quanVezes);
}

function catAndMouse(mouse, cat1, cat2) {
  if (mouse > cat1) {
    cat1 = mouse - cat1;
  } else {
    cat1 = cat1 - mouse;
  }
  if (mouse > cat2) {
    cat2 = mouse - cat2;
  } else {
    cat2 = cat2 - mouse;
  }
  if (cat1 === cat2) {
    return ("os gatos trombam e o rato foge");
  }
  if (cat1 < cat2) {
    return ("cat1");
  } else {
    return ("cat2");
  }
}

function fizzBuzz(numeros) {
  let arrayresposta = [0];
  arrayresposta.pop();
  for (let cont = 0;cont <= numeros.length - 1;cont++) {
    if (numeros[cont] % 3 === 0 && numeros[cont] % 5 === 0) {
      arrayresposta.push("fizzBuzz");
    } else if (numeros[cont] % 3 === 0 && numeros[cont] % 5 !== 0) {
      arrayresposta.push("fizz");
    } else if (numeros[cont] % 3 !== 0 && numeros[cont] % 5 === 0) {
      arrayresposta.push("buzz");
    } else {
      arrayresposta.push("bug!");
    }
  }
  return (arrayresposta);
}

function encode(frase) {
  frase = frase.replaceAll("a", 1);
  frase = frase.replaceAll("e", 2);
  frase = frase.replaceAll("i", 3);
  frase = frase.replaceAll("o", 4);
  frase = frase.replaceAll("u", 5);
  return (frase);
}
function decode(frase) {
  frase = frase.replaceAll("1", "a");
  frase = frase.replaceAll("2", "e");
  frase = frase.replaceAll("3", "i");
  frase = frase.replaceAll("4", "o");
  frase = frase.replaceAll("5", "u");
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
