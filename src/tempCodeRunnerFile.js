function fizzBuzz(arrayNumbers) {
  let comparacao = [];
  if (arrayNumbers = []) {
    for (let index = 0; index < arrayNumbers.length; index += 1) {
      if ((arrayNumbers[index] % 3 === 0) && (arrayNumbers[index] % 5 === 0)) {
        comparacao.push('fizzBuzz');
      } else if (arrayNumbers[index] % 5 === 0) {
        comparacao.push('buzz');
      } else if (arrayNumbers[index] % 3 === 0) {
        comparacao.push('fizz');
      } else {
        comparacao.push('bug');
      }
    }
  }
  return comparacao;
}
console.log(fizzBuzz());