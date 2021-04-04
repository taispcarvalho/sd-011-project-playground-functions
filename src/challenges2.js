// Desafio 10
function techList(arrayValue, nome) {
  arrayValue = arrayValue.sort();
  let arrayOfObjects = [];
  if (arrayValue.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arrayValue.length; index += 1) {
    let objectArray = {
      tech: arrayValue[index],
      name: nome
    };
    arrayOfObjects.push(objectArray);
  }
  return arrayOfObjects;
}

let a = ["React", "Jest", "HTML", "CSS", "JavaScript"];
console.log(techList(a, 'leo'));

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
