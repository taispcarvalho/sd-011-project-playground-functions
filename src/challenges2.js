// Desafio 10
function techList(techArr, name) {
  let newArrTech = [];
  for (let index = 0; index < techArr.length; index += 1) {
    if (index < techArr.length) {
      let object = {
        tech: techArr[index],
        nome: name
      }
      newArrTech.push(object);
    }
  }
  return newArrTech;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Matheus'));

// Desafio 11
function generatePhoneNumber(arrNumbers) {
  
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
