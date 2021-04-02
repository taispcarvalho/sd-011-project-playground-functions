// Desafio 10
function techList(techArray, name) {
  // seu código aqui
  techArray.sort();
  let objectArray = [];
  if (techArray.length > 0) {
    for (let i = 0; i < techArray.length; i += 1) {
      objectArray.push({ tech: techArray[i], name });
    }
    return objectArray;
  }
  return 'Vazio!';
}

// Desafio 11
function validationPhoneNumbers2(array, num, count) {
  let count2 = count;
  for (let i2 = 0; i2 < array.length; i2 += 1) {
    if (array[i2] === num) {
      count2 += 1;
    }
  }
  return count2;
}
function validationPhoneNumbers1(array) {
  let validation2 = true;
  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    count = validationPhoneNumbers2(array, array[i], count);
    if (array[i] < 0 || array[i] > 9 || count > 3) {
      validation2 = false;
    }
  }
  return validation2;
}

function generatePhoneNumber(phoneNumArray) {
  // seu código aqui
  if (phoneNumArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let validation1 = validationPhoneNumbers1(phoneNumArray);
  if (validation1) {
    // Referência: https://www.florin-pop.com/blog/2019/04/jcc-create-a-phone-number/
    let numberMask = '(xx) xxxxx-xxxx';
    for (let num of phoneNumArray) {
      numberMask = numberMask.replace('x', num);
    }
    return numberMask;
  }
  return 'Não é possível gerar um número de telefone com esses valores.';
}

// Desafio 12
function triangleCheckPart2(lineA, lineB, lineC) {
  let differences = {
    AB: Math.abs(lineA - lineB),
    BC: Math.abs(lineB - lineC),
    AC: Math.abs(lineA - lineC),
  };
  if (lineA > differences.BC && lineB > differences.AC && lineC > differences.AB) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let sums = {
    AB: lineA + lineB,
    BC: lineB + lineC,
    AC: lineA + lineC,
  };
  if ((lineA < sums.BC && lineB < sums.AC && lineC < sums.AB)) {
    return triangleCheckPart2(lineA, lineB, lineC);
  }
  return false;
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
