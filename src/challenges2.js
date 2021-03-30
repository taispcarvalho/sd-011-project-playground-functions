// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }

  let techList = [];
  let sortedTechNames = array.sort();

  for (let techName of sortedTechNames) {
    techList.push({
      tech: techName,
      name: name,
    });
  }
  return techList;
}

console.log(techList([]));
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11

function repeatNumber(array) {
  let count = 1;
  let repeats = false;

  let sortedArray = [...array].sort();

  for (let i = 1; i < sortedArray.length; i += 1) {
    if (sortedArray[i] === sortedArray[i - 1]) {
      count += 1;

      if (count === 3) {
        repeats = true;
        break;
      }
    } else {
      count = 1;
    }
  }
  return repeats;
}

function generatePhoneNumber(array) {
  let mask = '(xx) xxxxx-xxxx';
  array.forEach(function (item) {
      mask = mask.replace('x', item);
  });
  for(let index = 0; index < array.length; index ++) {
  if(array.length === 11 && array[index] !== repeatNumber(array)) {
    return mask
  } else if (array[index] < 0 || array[index] > 9 || array < 0) {
    return 'não é possível gerar um numero de telefone com esses valores'
  } 
  if(array.length !== 11) {
    return 'Array com tamanho incorreto'
  }
  return arrayNotPossible;
}
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
console.log(generatePhoneNumber([1, 2, 3, 0, 1]))
console.log(generatePhoneNumber([2, 3, 4, 5, 6, 7, 8, 21]))
console.log(generatePhoneNumber([2, 3, 4, 5, 6, 7, 8, -21]))
console.log(generatePhoneNumber([2, 2, 2, 2, 2, 5, 6, 7, 8, 1, 3]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA <= 0 || lineB <= 0 || lineC <= 0) {
    return false;
  }

  if (lineA >= lineB + lineC) {
    return false;
  }

  if (lineB >= lineA + lineC) {
    return false;
  }

  if (lineC >= lineA + lineB) {
    return false;
  }

  return true;
}

console.log(triangleCheck(10, 2, 9));

// Desafio 13
function hydrate(string) {
  let countWaterCoups = string.match(/\d+/g); //regex pra pegar apenas numeros na variavel, pode ser ^[0-9]*$

  countWaterCoups = countWaterCoups.map((count) => parseInt(count, 10));

  let totalCount = countWaterCoups.reduce((accumulator, currentValue) => accumulator + currentValue); //soma todos numeros da array

  if (totalCount === 1) {
    return '1 copo de água';
  }

  return totalCount + ' copo de água';
}

console.log(hydrate('1 copo de cerva, 1 copo de pinga, 1 copo de pitu'))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
