// Desafio 10
function techList(array, name) {
  if (array.length <= 0) {
    return 'Vazio!';
  } let newarray = [];
  array = array.sort();
  for (let index = 0; index < array.length; index += 1) {
    newarray.push({
      tech: array.indexOf(),
      name,
    });
  }
  return newarray;
}
// Desafio 11
function repeatNumber (repetido, teleList) {
  let contagem = 0;
  for (let index1 = 0; index1 < teleList.length; index1 += 1) {
    if (repetido === teleList[index1]) {
      contagem += 1;
    } if (contagem >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}
function restricoes (repetido) {
  if (repetido < 0 || repetido > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}
function generatePhoneNumber(teleList) {
  let repitiu = 0;
  for (let index = 0; index < teleList.length; index += 1) {
    repetiu += 1;
  }
}
function tamanhoPhone (teleList) {
  if (telelist.length !== 11) {
    return 'Array com tamanho incorreto.';
  }


// Desafio 12
function condicaoDeExistencia(lineA, lineB ,lineC) {
 let existencia = false;
 if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    existencia = true;
 } 
 return existencia;
}
function triangleCheck(lineA, lineB, lineC) {
  let existencia = false;
  let somaAC= lineA + lineC;
  let somaAB= lineA + lineB;
  let absoluteAC= Math.abs(lineA - lineC);
  let absoluteAB= Math.abs(lineA - lineB);
  if (lineB < somaAC && lineB > absoluteAC && lineC < somaAB && lineC > absoluteAB) {
    existencia =condicaoDeExistencia(lineA, lineB, lineC);
  }
  return existencia;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
