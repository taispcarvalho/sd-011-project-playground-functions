divArray=[2, 15, 7, 9, 45]

for (let index = 0; index < divArray.length; index += 1) {
    if (divArray[index] % 3 === 0 && divArray[index] % 5 === 0) {
      divArray[index] = 'fizzBuzz';
    } else if (divArray[index] % 3 === 0){
      divArray[index] = 'fizz';
    } else if (divArray[index] % 5 === 0){
      divArray[index] = 'buzz';
    } else if (divArray[index] % 1 === 0) {
      divArray[index] = 'bug!';
    }
  }
  console.log(divArray)