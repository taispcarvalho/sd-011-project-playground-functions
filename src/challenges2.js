// Desafio 10
function techList(techArr, name) {
  let newArrTech = [];
  techArr = techArr.sort();
  if (techArr.length > 1) {
    for (let index = 0; index < techArr.length; index += 1) {
      let object = {
        tech: techArr[index],
        name,
      };
      newArrTech.push(object);
    }
  } else {
    return 'Vazio!';
  }
  return newArrTech;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {

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
