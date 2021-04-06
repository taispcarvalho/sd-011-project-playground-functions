//Desafio1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split (" ");
}

// Desafio 4
function concatName(array) {
  let novoArray = "";
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (i === array.length - 1) {
      novoArray = novoArray + array[i] + ", ";
    }
    if (i === 0) {
      novoArray = novoArray + array[i];
    }
  }
  return novoArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  for (let i = 1; i <= wins; i += 1) {
    pontos += 3;
  }
  for (let j = 1; j <= ties; j += 1) {
    pontos += 1;
  }
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let count = 0;
  let maior = numeros[0];
  for (let i in numeros) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  for (let i in numeros) {
    if (numeros[i] === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  if (dist1 > dist2) {
    return "cat2";
  } else if (dist2 > dist1) {
    return "cat1";
  }
  return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(array) {
  let novoArray = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      novoArray.push("fizzBuzz");
    } else if (array[i] % 3 === 0) {
      novoArray.push("fizz");
    } else if (array[i] % 5 === 0) {
      novoArray.push("buzz");
    } else {
      novoArray.push("bug!");
    }
  }
  return novoArray;
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
