// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  let newArrayTech = [];
  arrayTech = arrayTech.sort();
  for (let index = 0; index < arrayTech.length; index += 1) {
    newArrayTech.push({
      tech: arrayTech[index],
      name,
    });
  }
  return newArrayTech;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(techList([], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = true;
  let AbsAeB = Math.abs(lineA - lineB);
  let AbsBeC = Math.abs(lineB - lineC);
  let AbsAeC = Math.abs(lineA - lineC);
  let sumAeB = lineA + lineB;
  let sumBeC = lineB + lineC;
  let sumAeC = lineA + lineC;
  if ((sumBeC > lineA > AbsBeC || sumAeC > lineB > AbsAeC || sumAeB > lineC > AbsAeB)) {
    check = true;
  } else if (lineA > sumBeC || lineB > sumAeC || lineC > sumAeB) {
    check = false;
  } else if (lineA < AbsBeC || lineB < AbsAeC || lineC < AbsAeB) {
    check = false;
  }
  return check;
}
console.log(triangleCheck(16, 20, 30));

// Desafio 13
function hydrate(drinks) {
  let totalWater = 0;
  let numberDrinks = drinks.match(/\d+/g).map(Number);
  for (let index = 0; index < numberDrinks.length; index += 1) {
    totalWater += numberDrinks[index];
  }
  if (totalWater === 1) {
    totalWater += ' copo de água';
  }
  if (totalWater > 1) {
    totalWater += ' copos de água';
  }
  return totalWater;
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
