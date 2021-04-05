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
  let result = `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > 9 || numbers[index] < 0) {
      result = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (repeatedNumber === true) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else if (numbers.length > 11 || numbers.length < 11) {
    result = 'Array com tamanho incorreto.';
  } 
  return result;
}

console.log(generatePhoneNumber([0, 21, 3, 4, 14, 2, 7, 8, 19, 9, 4]));
