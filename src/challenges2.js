// Desafio 10
function techList(array, myName) {
  let retorno = [];
  let retorno1 = array.sort();
  if (retorno1.length !== 0) {
    for (let index in retorno1) {
      retorno[index] = {
      tech: array[index],
      name: myName,
      };
    }
  } else {
    return 'Vazio!';
  }
  return retorno;
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {

  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, linceC) {
  let angl1 = Math.abs(lineA + lineB)
  let angl2 = Math.abs(lineA - lineB)
  let value = false;

  if (lineC < angl1 && lineC > angl2){
  value = true;
  } else if (angl1 < lineC && angl2 > lineC){
  value = false;
  }
  return value;
  // seu código aqui
}
console.log(triangleCheck(10, 14, 8))
// Desafio 13
function hydrate(string) {
  let bebeAgua = 0;
  for (let index in string) {
    if (string[index] === '1' || string[index] === '2' ||string[index] === '3' ||string[index] === '4' ||string[index] === '5' ||string[index] === '6' ||string[index] === '7' ||string[index] === '8' || string[index] === '9') {
      bebeAgua = bebeAgua + parseInt(string[index]);
    }
  }
  if (bebeAgua === 1) {
    return bebeAgua + ' copo de água';
  } else {
    return bebeAgua + ' copos de água';
  }
  // seu código aqui
}
console.log(hydrate("3 cerveja"))
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
