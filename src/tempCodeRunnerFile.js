let arrayNumbers = [2, 15, 7, 9, 45];
function fizzBuzz(arrayNumbers) {

  for(let number in arrayNumbers){
    if (number[i]%3 === 0 && number[i]%5 === 0) {
    console.log('fizzBuzz');
    } else if(number[i]%5 === 0) {
    console.log('buzz');
    } else if (number[i]%3 === 0) {
    console.log('fizz');
    }else {
    console.log('bug!');
    }
  }
  return arrayNumbers
}