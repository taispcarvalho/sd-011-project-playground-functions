// Desafio 10
function techList(array, names) {
  if (array.length === 0) {
    return ('Vazio!');
  }
  let sortedArray = array.sort();
  let finalList = [];
  for (let index = 0; index < sortedArray.length; index += 1) {
    finalList[index] = {
      tech: sortedArray[index],
      name: names };
  }
  return finalList;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let existence = false;
  if (Math.abs(lineA + lineB > lineC || lineA + lineC > lineB || lineB + lineC > lineA)) {
    existence = true;
  }
  if (Math.abs(lineA + lineB < lineC || lineA + lineC < lineB || lineB + lineC < lineA)){
    existence = false;
  }
  return existence;
}
console.log(triangleCheck(16, 9, 2));

// Desafio 13
function hydrate(string) {
  let numbers = string.match(/\d+/g).map(Number);
  let total = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    total += numbers[index];
  }
  return (`${total} copos de água`);
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
