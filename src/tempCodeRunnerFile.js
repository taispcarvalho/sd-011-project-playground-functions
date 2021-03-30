function highestCount(numbers, count) {
numbers = [0 , 0 , 0];
  let higherNumber = 0;
  count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
      count = count + 1;
      console.log(count);
    }
    
  }
  return count;
}
