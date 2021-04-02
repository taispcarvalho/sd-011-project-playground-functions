// Desafio 10
function techList(techsToLearn,myName) {
  techToLearn = techsToLearn.sort()
  let output = [];
  for(index = 0; index < techsToLearn.length; index += 1) {
  var sorted = {
    tech: techsToLearn[index],
    name: myName,
  }
  output.push(sorted)
  } 
  return output;
  }

  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Maran'))




  unction techList(array, myName) {
    let techName = [];
    for (let index in array.sort()) {
    if ({}.hasOwnProperty.call(array, index)) {
    techName[index] = {
    tech: array[index],
    name: myName,
    };
    }
    }
    if (techName.length === 0) {
    return 'Vazio!';
    }
    return techName;
    } 





    function techList(array, myName) {
      let techName = [];
      // Nessa parte, para resolver o problema do lint ('Guarding for-in (guard-for-in)') utilizei este material: https://eslint.org/docs/2.0.0/rules/guard-for-in
      for (let index in array.sort()) {
      if ({}.hasOwnProperty.call(array, index)) {
      techName[index] = {
      tech: array[index],
      name: myName,
      };
      }
      }
      if (techName.length === 0) {
      return 'Vazio!';
      }
      return techName;
      } 



      retorno[index] = {
        tech: array[index],
        name: myName,
        }; 







var teste = 'algo';
var car = {
  marca: 'nissan',
  modelo: 'tiida',
  ano: 2012,
  odometro: '70.000',
}

console.log(car)
console.log(car.marca);
console.log(car.modelo);
console.log(car['odometro'])

car.cor = teste + 'prata';
console.log(car);



















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
