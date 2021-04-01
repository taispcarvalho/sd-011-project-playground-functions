// Desafio 10
function techList(array, name) {
  let test = [];
  if (array.length <= 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < array.length; index += 0) {
    test.push = ({
      tech: array[index],
      name: name,
    }
    );
  }
  return test;
}

// Desafio 11
function generatePhoneNumber(array) {
let resultado = '';
  if(array.length !== 11) {
  let resultado =  ('Array com tamanho incorreto.')
  }
  return resultado;
}

function numeroZero(array) {
let resultado = '';
let verificaZero = generatePhoneNumber(array);
  for (let numeroZero of array) {
    if (numeroZero < 0) {
    resultado ('não é possível gerar um número de telefone com esses valores');
    }
  }
  return resultado;
}

function numeroNove(array) {
let resultado = '';
let verificaNove = generatePhoneNumber(array);
  for (let numeroNove of array) {
    if (numeroNove > 9) {
    let resultado = ('não é possível gerar um número de telefone com esses valores');
    }
  }
  return resultado
}

function maiorValor(array) {
let newArray = generatePhoneNumber(array);
let numeroRepetido = [];
for (let index of newArray) {
  for (let indexNumeroRepetido of newArray) {
    if (indexNumeroRepetido === index){
      numeroRepetido [index] = (numeroRepetido[index] || 0) + 1;
    }
  }
  if (numeroRepetido[index] >= 3) {
    let resultado = ('não é possível gerar um número de telefone com esses valores');
    }
  }
}

function generatePhoneNumber(array) {

  return ('(' + array[0] + array[1] + ')' + array[2]+ array[3]+ array[4]+ array[5]+ array[6] + ' - '+ array[7]+ array[8]+ array[9]+ array[10]+ array[11]);
}
  console.log(generatePhoneNumber(array));

// Desafio 12 - ok
function triangleCheck(lineA, lineB, lineC) {
  let triaA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  let triaB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  let triaC = lineC < lineB + lineA && lineC > Math.abs(lineB - lineA);
  if (lineA !== 0 && lineB !== 0 && lineC !== 0) {
    return triaA || triaB || triaC;
  }
}
console.log(triangleCheck(10, 6, 2));

// Desafio 13
function hydrate(string) {
  let numeroCopos = string.match(/\d+/g).map(Number);
  let somaCopos = 0;
  for (let index = 0; index < numeroCopos.length; index += 1) {
    somaCopos += numeroCopos[index];
  }
  if(somaCopos > 1) {
    return (somaCopos + ' copos de água');
  } else {
    return (somaCopos + ' copo de água');
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
