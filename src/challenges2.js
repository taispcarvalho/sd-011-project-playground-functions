// Desafio 10
function sortArray(tech) {
  let sorted = tech.sort(function (accumulator, currentNumber) {
    if (accumulator < currentNumber) {
      return -1;
    }
    if (accumulator > currentNumber) {
      return 1;
    }
    return 0;
  });
  return sorted;
}

function techList(techArray, name) {
  let sortedArray = sortArray(techArray);
  let techListed = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    let currentTech = sortedArray[index];
    techListed.push({
      tech: currentTech,
      name,
    });
  }
  return techListed;
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
