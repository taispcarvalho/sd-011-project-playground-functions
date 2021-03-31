// Desafio 10
function techList(array, name) {
  let newArray = [];
  if (array.length > 0) {
    for (let index = 0; index < array.length; index += 1) {
      let objeto = {
        tech: array[index],
        name: `${name}`,
      };
      newArray.push(objeto);
    }
    return newArray.sort((a, b) => (a.tech > b.tech ? 1 : -1));
  }
  return 'Vazio!';
}

// Desafio 11
// let teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
// function generatePhoneNumber(array) {
//   let phoneNumber = '(' + array[0] + array[1] + ')' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10]
//   return phoneNumber
// }
// console.log(generatePhoneNumber(teste))
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
