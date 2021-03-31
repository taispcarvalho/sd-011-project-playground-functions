let num1 = [2, 15, 7, 9, 45];
let num2 = [7, 9];
let num3 = [9, 25];
function fizzBuzz(arrayNumbers) {
  let comparacao = [];
      for(let index = 0; index < arrayNumbers.length; index += 1){
      if ((arrayNumbers[index] % 3 === 0) && (arrayNumbers[index] % 5 === 0)) {
        comparacao.push('fizzBuzz');
      }else if(arrayNumbers[index] % 5 === 0) {
        comparacao.push('buzz');
      }else if(arrayNumbers[index] % 3 === 0) {
        comparacao.push('fizz');
      }else{
        comparacao.push('bug');
      }
    }
  
  return comparacao;
}
console.log(fizzBuzz(num1));
console.log(fizzBuzz(num2));
console.log(fizzBuzz(num3));