// Desafio 10
function techList(array10, name) {

array10 = array10.sort();
let array11 = [];

if (array10.length === 0){
  return ('Vazio!');
}

else{
  for (let index = 0; index < array10.length; index +=1){
    let object = {
      tech : array10[index],
      name: name
    };

    array11.push(object) 
  }
  return (array11);
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'Lucas'));
console.log(techList([],'Lucas'));


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
