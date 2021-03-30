let arrayTest = [9, 1, 2, 3, 9, 5, 7];
let timesNumberAppears = 0;
function highestCount(arrayNumbers) {
 let heigthNumber = Math.max(null, arrayNumbers);
 for( let index = 0; index < arrayNumbers.length; arrayNumbers += 1 ) {
   if(Math.max(null, arrayNumbers) === arrayNumbers[index])
  timesNumberAppears = timesNumberAppears + 1;
 }
 return timesNumberAppears;
}
console.log(highestCount(arrayTest));