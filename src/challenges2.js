// Desafio 10
function createObject(techName, nameName) {
  let object = {
    tech: techName,
    name: nameName,
  };
  return object;
}

function techList(array, nameName) {
  let arrayOfTechObj = [];
  if (array.length > 0) {
    array.sort();
    let object;
    for (let value of array) {
      object = createObject(value, nameName);
      arrayOfTechObj.push(object);
    }
    return arrayOfTechObj;
  }
  return 'Vazio!';
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Laura'));

// Desafio 11
// function countNum(array, number) {
//   let count = 0;
//   for (let num of array) {
//     if (num === number) {
//       count += 1;
//     }
//   }
//   return count;
// }

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
