// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }

  techs = techs.sort()
  let newList = [];

  for (let index = 0; index < techs.length; index += 1) {
    newList.push({
      tech: techs[index],
      name: name, 
    }
    )
  }
  return newList;
}

// Desafio 11
function checkRepeated(param1) {
  let countrepeated = 0;
  let result = 0;
  for (let index = 0; index < param1.length; index += 1) {
    for (let secondIndex = 0; secondIndex < param1.length; secondIndex += 1) {
      if (param1[index] === param1[secondIndex]) {
        countrepeated += 1;
      }
    }
    if (result < countrepeated) {
      result = countrepeated;
    }
    countrepeated = 0;
  }
  return result >= 3;
}

function generatePhoneNumber(numbers) {
let repeatedNumber = checkRepeated(numbers);
if (repeatedNumber === true) {
  return 'não é possível gerar um número de telefone com esses valores';
}
if (numbers.length > 11) {
  return 'Array com tamanho incorreto.'
}
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 9 || numbers[index] < 0) {
    return 'não é possível gerar um número de telefone com esses valores'
  }
} 
return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 13
function hydrate(param1) {
  let reg = /\d+/g;
  let cupsOfWater = param1.match(reg);
  let sumResult = 0;
  let result;
  for (let index = 0; index < cupsOfWater.length; index += 1) {
    sumResult += parseInt(cupsOfWater[index]);
  }
  if (sumResult > 1) {
    result = `${sumResult} copos de água`;
  } else {
    result = `${sumResult} copo de água`;
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
