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

return triaA || triaB || triaC;

}
  
console.log(triangleCheck(10, 6, 2))

// Desafio 13
let 
function hydrate(string) {
  string = 'Bem vindo ao bar da tribe'
  newString.push(string);
  console.log(newString)
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
