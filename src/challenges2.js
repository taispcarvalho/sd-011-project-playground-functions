// Desafio 10
function techList(techArr, name) {
  let newArrTech = [];
  techArr = techArr.sort();
  // O método sort() foi uma sugestao do meu amigo Renato Bispo, eu aprendi como utiliza-lo da maneira
  // correta no seguinte link : https://www.w3schools.com/js/js_array_sort.asp
  if (techArr.length > 1) {
    for (let index = 0; index < techArr.length; index += 1) {
      let object = {
        tech: techArr[index],
        name,
      };
      newArrTech.push(object);
    }
  } else {
    return 'Vazio!';
  }
  return newArrTech;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function telephoneGenerator1(arrTel) {
  let newString = '';
  newString = `(${arrTel[0]}${arrTel[1]}) `;
  for (let index = 1; index < 7; index += 1) {
    if (index > 1 && index < 7) {
      newString += arrTel[index];
    }
  }
  return newString;
}

function telephoneGenerator2(arrTel) {
  let newString2 = '-';
  for (let index = 7; index < 11; index += 1) {
    if (index > 6) {
      newString2 += arrTel[index];
    }
  }
  return newString2;
}

// A ideia para refatorar o codigo para contar os numeros repetidos veio do meu amigo Inacio
// que sugeriu que eu criasse uma funcao separada para contar os numeros (numberToCount)

function numberToCount(arr, number) {
  let count = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (number === arr[index]) {
      count += 1;
    }
  }
  return count;
}

function repeatedToCount(arrNumbers2) {
  for (let index = 0; index < arrNumbers2.length; index += 1) {
    let numberCount = numberToCount(arrNumbers2, arrNumbers2[index]);
    if (numberCount >= 3) {
      return true;
    }
  }
}

function isValidTelephone(arrTelephone) {
  for (let index = 0; index < arrTelephone.length; index += 1) {
    if (arrTelephone[index] < 0 || arrTelephone[index] > 9) {
      return true;
    }
  }
}

function generatePhoneNumber(arrNumbers) {
  let repeatedNumber = repeatedToCount(arrNumbers);
  let validNumber = isValidTelephone(arrNumbers);
  if (arrNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (repeatedNumber || validNumber) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let telephoneGenerated = telephoneGenerator1(arrNumbers) + telephoneGenerator2(arrNumbers);

  return telephoneGenerated;
}

console.log(generatePhoneNumber([]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false;
  }
  return true;
}

console.log(triangleCheck(14, 8, 30));

// Desafio 13
function hydrate(str) {
  let waterGlasses = 0;
  for (let index = 0; index < str.length; index += 1) {
    if (parseInt(str[index], 10) >= 1 && parseInt(str[index], 10) <= 9) {
      waterGlasses += (parseInt(str[index], 10));
    }
  }
  if (waterGlasses === 1) {
    return '1 copo de água';
  }
  return (`${waterGlasses} copos de água`);
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

// Referencias
// 1 - https://eslint.org/docs/rules/radix = ajudou a entender o parametro radix do parseInt();
// 2 - https://www.w3schools.com/jsref/jsref_parseint.asp = me ajudou a entender como utilizar o parseInt().

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
