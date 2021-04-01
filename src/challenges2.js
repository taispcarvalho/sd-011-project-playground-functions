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
  return techList(test);
}

// Desafio 11
function generatePhoneNumber(array) {
  
}

function numeroTelefone(array) {
  let numeroDeTelefone = generatePhoneNumber(array);
  let primeirosNumero = ('(' + array[0] + array[1] + ') ');
  let numeroMeio = (array[2] + array[3] + array[4] + array[5] + array[6] + ' - ');
  let ultimoNumero = (array[7] + array[8] + array[9] + array[10] + array[11]);
  let numeroTotal = primeirosNumero + numeroMeio + ultimoNumero;
  console.log(numeroTelefone(numeroTotal));
  return numeroTelefone(numeroTotal);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triaA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  let triaB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  let triaC = lineC < lineB + lineA && lineC > Math.abs(lineB - lineA);
  
  return (triaA || triaB || triaC);
}

// Desafio 13
function hydrate(string) {
  let numeroCopos = string.match(/\d+/g).map(Number);
  let somaCopos = 0;
  for (let index = 0; index < numeroCopos.length; index += 1) {
    somaCopos += numeroCopos[index];
  }
  if (somaCopos > 1) {
    return (somaCopos + ' copos de água');
  } if (somaCopos >= 0 || somaCopos < 1) {
    return (somaCopos + ' copo de água');
  }
  return hydrate;
}
console.log(hydrate('5 cachaça'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
