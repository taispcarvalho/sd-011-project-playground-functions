// Desafio 10
function techList(array, name) {
  let test = [];
  if (array.length <= 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < array.length; index += 0) {
    test.push = ({
      tech: array[index],
      name: nm,
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
  if(lineA !==0 && lineB !== 0 && lineC !==0){
    return (triaA || triaB || triaC);
  }
}  
console.log(triangleCheck(10, 6, 2))

// Desafio 13
function hydrate(string) {
  let numeroCopos = string.match(/\d+/g).map(Number); //me gera um array com os números
  let somaCopos = 0;
  for (let index = 0; index < numeroCopos.length; index += 1){
    somaCopos += numeroCopos[index];
  }
  return (somaCopos, 'copos de água');
  }

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
