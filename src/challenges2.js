// Desafio 10
function techList(array, name) {
  let test = [];
  if (array.length <= 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < array.length; index += 0) {
      test.push = ({
      tech: array[index],
      name: name,
      }
    );
  }
   return test;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
let triaA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
let triaB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
let triaC = lineC < lineB + lineA && lineC > Math.abs(lineB - lineA);

return triaA
}
  
console.log(triangleCheck(10, 14, 8))

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
