// Desafio 10
function sortObject(element, nome) {
  return { tech: element, name: nome };
}
function techList(array, name) {
  let newObject = [];
  if (array.length === 0) return 'Vazio!';
  for (let element of array.sort()) {
    newObject.push(sortObject(element, name));
  }
  return newObject;
}
// let lista = ["React", "Jest", "HTML", "CSS", "JavaScript"]
// let name = "Lucas"
// console.log(techList(lista, name));
// Desafio 11
function generatePhoneNumber() {
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineC < lineA + lineB && lineC > Math.abs(lineB - lineA)) return true;
  if (lineA < lineC + lineB && lineA > Math.abs(lineB - lineC)) return true;
  if (lineB < lineA + lineC && lineB > Math.abs(lineC - lineA)) return true;
  return false;
}
console.log(triangleCheck(10, 14, 8));
// Desafio 13
function transformStringToArray(string) {
  return string.split(' ');
}

function transformStringToNumber(array) {
  let newArray = [];
  for (let current of array) {
    newArray.push(parseFloat(current));
  }
  return newArray;
}

function sumNumbers(array) {
  let totalSum = 0;
  for (let number of array) {
    if (number % number === 0) {
      totalSum += number;
    }
  }
  return totalSum;
}

function hydrate(string) {
  let waterCups = sumNumbers(transformStringToNumber(transformStringToArray(string)));
  if (waterCups === 1) return waterCups + ' copo de água';
  return waterCups + ' copos de água';
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
