// Desafio 10
function techList(techNamesArray) {
  if (techNamesArray.length === 0) {
    return 'Vazio!';
  }

  let techListArray = [];
  let sortedTechNamesArray = techNamesArray.sort();

  for (let techName of sortedTechNamesArray) {
    techListArray.push({
      tech: techName,
      name: 'Inacio',
    });
  }

  return techListArray;
}

console.log(techList([]));
console.log(techList(['Redux', 'C#', 'C++', 'Unity', 'Unreal Engine 5']));

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
