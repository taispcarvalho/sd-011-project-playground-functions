// Desafio 10
function moveBiggest(arrayOfObjects, sizeOfRepet) {
  for (let position = 0; position < sizeOfRepet; position += 1) {
    let afterPosition = position + 1;
    if (arrayOfObjects[position].tech > arrayOfObjects[afterPosition].tech) {
      let objectCache = arrayOfObjects[position];
      arrayOfObjects[position] = arrayOfObjects[afterPosition];
      arrayOfObjects[afterPosition] = objectCache;
    }
  }
  return arrayOfObjects;
}

function orderList(arrayOfObjects) {
  for (let index = 1; index < arrayOfObjects.length; index += 1) {
    let sizeOfRepet = arrayOfObjects.length - index;
    arrayOfObjects = moveBiggest(arrayOfObjects, sizeOfRepet);
  }
  return arrayOfObjects;
}

function techList(array, name) {
  if (array.length === 0){
    return 'Vazio!';
  }
  let techObjects = [];
  for (let tech of array) {
    let newObject = { tech, name };
    techObjects.push(newObject);
  }
  return orderList(techObjects);
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
