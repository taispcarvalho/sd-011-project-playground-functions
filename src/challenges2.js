// Desafio 10
function techList(name) {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(param1) {
  let reg = /\d+/g;
  let cupsOfWater = param1.match(reg);
  let result = 0;
  for (index = 0; index < cupsOfWater.length; index += 1) {
    result += parseInt(cupsOfWater[index]);
  }
  if (result > 1) {
    return `${result} copos de água`;
  } else {
    return `${result} copo de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
