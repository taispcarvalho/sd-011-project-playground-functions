function lessThanThreeRepsSecond(index, array) {
    let lessThanThree = true;
    let counterOfRep = 0;
    for (let index2 = 1; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        counterOfRep += 1;
      }
    }
    if (counterOfRep > 2) {
      lessThanThree = false;
    }
    return lessThanThree;
  }



  function lessThanThreeReps(array) {
    let lessThanThree = true;
    for (let index = 0; index < array.length; index += 1) {
      lessThanThree = lessThanThreeRepsSecond(index, array);
      if (lessThanThree === false) {
        break;
      }
    }
    return lessThanThree;
  }



  function betweenZeroNine(array) {
    let zeroAndNine = true;
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] < 0 || array[index] > 9) {
        zeroAndNine = false;
      }
    }
    return zeroAndNine;
  }


  function withElevenNumbers(array) {
    let phoneNumber = ['(', 0, 0, ') ', 0, 0, 0, 0, 0, '-', 0, 0, 0, 0];
    let difOfIndex = 1;
    for (let index = 0; index < array.length; index += 1) {
      if (index === 2 || index === 7) {
        difOfIndex += 1;
        phoneNumber[index + difOfIndex] = array[index];
      } else {
        phoneNumber[index + difOfIndex] = array[index];
      }
    }
    return phoneNumber.join('');
  }



  function generatePhoneNumber(array) {
    let phoneNumber = [];
    if (array.length !== 11) {
      phoneNumber = 'Array com tamanho incorreto.';
    } else if (betweenZeroNine(array) !== true || lessThanThreeReps(array) !== true) {
      phoneNumber = 'não é possível gerar um número de telefone com esses valores';
    } else {
      phoneNumber = withElevenNumbers(array);
    }
    return phoneNumber;
}
console.log(generatePhoneNumber([,2,3,4,5,6,7,8,9,0,1]))