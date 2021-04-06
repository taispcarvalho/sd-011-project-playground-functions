// Desafio 10
function techList(techNames, name) {
  if (techNames === 0) {
    return 'Vazio!';
  }
  const techs = techNames.sort().map((tech) => ({ tech, name }));
    return techs;
  }

// Desafio 11
function checkNumbers (numbers) {
  const numberRepeat = arrayOfNumbers.map((number) => {
    let count = 0;
      for (let index in arrayOfNumbers) {
        if (number === arrayOfNumbers[index]) {
        count += 1;
      }
      return count;
    }

  return numberRepeat
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
};
  
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 11, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 5, 5, 5, 5, 5, 8, 9, 0, 1]));
    
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const checkSum = lineA < lineB + lineC;
  const checkDiff = lineA > Math.abs(lineB - lineC);
  return checkSum && checkDiff;
};
  
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(1, 1, 5));


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
