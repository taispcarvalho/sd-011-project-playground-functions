// Desafio 10
function techList(techNames, name) {
  if (techNames.length === 0) {
    return 'Vazio!';
  };
  return techNames.sort().map((tech) => ({ tech, name }));
};

// Desafio 11
/* function checkNumbers (numbers) {
  let count = 0;
      for (let index in arrayOfNumbers) {
        if (number === arrayOfNumbers[index]) {
        count += 1;
      }
      return count;
    }

  for (let index in arrayOfNumbers) {
    if (number == arrayOfNumbers[index])
    count +=1;
  }
  return checkNumbers;
}

function generatePhoneNumber(arrayOfNumbers) {
  let telefone = [];
  telefone = ('(' + arrayOfNumbers[0] + arrayOfNumbers[1] + ') ' + arrayOfNumbers[2] + arrayOfNumbers[3] + arrayOfNumbers[4] + arrayOfNumbers[5] +  arrayOfNumbers[6] + '-' + arrayOfNumbers[7] + arrayOfNumbers[8] + arrayOfNumbers[9] + arrayOfNumbers[10]);

  for (let index in arrayOfNumbers) {
    if (arrayOfNumbers[index] < 0 || arrayOfNumbers[index] > 9 || numberRepeat >= 3) {
      return 'Não é possível gerar um número de telefone com esses valores.'
    } 
  }  

  if (arrayOfNumbers.length === 11) {
    return telefone;
  } 
  if (arrayOfNumbers.length !== 11) { 
    return 'Array com tamanho incorreto.'
  }
}
  
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 11, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 5, 5, 5, 5, 5, 8, 9, 0, 1])); */
    
// Desafio 12

function checkSides (A, B, C) {
  const sumLines = B + C;
  const diffLines = Math.abs(B - C);
  if (A < sumLines && A > diffLines) {
  return true;
  }
  return false;
  }
  
  function triangleCheck(lineA, lineB, lineC) {
  const checkLineA = checkSides(lineA, lineB, lineC);
  const checkLineB = checkSides(lineA, lineB, lineC);
  const checkLineC = checkSides(lineA, lineB, lineC);
  if (checkLineA && checkLineB && checkLineC) {
  return true;
  }
  return false;
  }
  console.log(triangleCheck(10, 14, 8));
  
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
