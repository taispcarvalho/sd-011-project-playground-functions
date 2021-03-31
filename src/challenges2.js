// Desafio 10
function techList(arr, nm) {
  let newArr = [];

  if (arr.length > 0) {
    for (let index of arr.sort()) {
      newArr.push({ tech: index, name: nm });
    }
  } else return 'Vazio!';
  return newArr;
}
// 'React', 'Jest', 'HTML', 'CSS', 'JavaScript'
let cursos = ['Jest'];

console.log(techList(cursos, 'marlon'));

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
