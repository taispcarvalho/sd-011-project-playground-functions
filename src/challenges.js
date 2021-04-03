// Desafio 1
function compareTrue(valorA, valorB) {
  return valorA && valorB; // Aula ao Vivo na Trybe
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' '); // string.split() (Stackoverflow): https://pt.stackoverflow.com/questions/204346/como-pegar-uma-palavra-dentro-de-uma-string-frase-em-node-js
}

// Desafio 4
function concatName(array) {
  let [u, p] = [array[array.length - 1], array[0]]; // Destructure Assignment (MDN): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#trocando_vari%C3%A1veis
  return `${u}, ${p}`; // ES6 template literals (Stackoverflow): https://stackoverflow.com/questions/46858840/unexpected-string-concatenation
}

// Desafio 5
function footballPoints(wins, ties) {
  let p = 0;
  p += wins * 3;
  p += ties * 1;
  return p;
}

// Desafio 6
function highestNumber(array) {
  let h = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > array[i + 1] && array[i] > h) {
      h = array[i];
    }
  }
  return h;
}

function highestCount(array) {
  let c = 0;
  let h = highestNumber(array);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === h) {
      c += 1;
    }
  }
  return c;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1P = Math.abs(mouse - cat1); // Math.abs() (MDN): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let cat2P = Math.abs(mouse - cat2);
  let string;

  if (cat1P < cat2P) {
    string = 'cat1';
  } else if (cat2P < cat1P) {
    string = 'cat2';
  } else {
    string = 'os gatos trombam e o rato foge';
  }
  return string;
}

// Desafio 8
function fizzBuzz(array) {
  let answer = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0) {
      answer[i] = 'fizz';
    } else if (array[i] % 5 === 0) {
      answer[i] = 'buzz';
    } else {
      answer[i] = 'bug!';
    }
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      answer[i] = 'fizzBuzz';
    }
  }
  return answer;
}

// Desafio 9
function encode(string) {
  let substituicao = { // Objetos com replace()(Blog da Trybe): https://blog.betrybe.com/javascript/javascript-replace/
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  let alterado = string.replace(/a|e|i|o|u/g, function (x) { // replace() com regexp (W3S): https://www.w3schools.com/jsref/jsref_replace.asp
    let trocado = substituicao[x]; // regexp (MDN): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    return trocado;
  });
  return alterado;
}

function decode(string) {
  let substituicao = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let alterado = string.replace(/1|2|3|4|5/g, function (x) {
    let trocado = substituicao[x];
    return trocado;
  });
  return alterado;
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
