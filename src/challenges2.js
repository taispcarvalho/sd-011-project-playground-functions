// Desafio 10
function techList(arrayD10, name) {
  if (arrayD10.length === 0) {
    return 'Vazio!';
  }
  let sortedTechNames = arrayD10.sort();
  let newArray = [];
  for (let i = 0; i < sortedTechNames.length; i += 1) {
    let objectD10 = {
      tech: '',
      name: '',
    };
    objectD10.name = name;
    objectD10.tech = sortedTechNames[i];
    newArray.push(objectD10);
  }
  return newArray;
}

// Desafio 11
function generatePhoneNumber(arrayD11) {
  let ddd = [];
  let numPart1 = [];
  let numPart2 = [];

  // Check for wrong conditions
  switch (true) {
    case arrayD11.length !== 11:
      return `Array com tamanho incorreto.`;
    case checkNumber (arrayD11):
      return `não é possível gerar um número de telefone com esses valores`;
    default: 
      for (let i = 0; i <= 1; i +=1) {
        ddd.push(arrayD11[i]);   
      }
      for (let i = 2; i <= 6; i +=1) {
        numPart1.push(arrayD11[i]);
      }
      for (let i = 7; i <= 10; i +=1) {
        numPart2.push(arrayD11[i]);
      }
      return `(${ddd.join('')}) ${numPart1.join('')}-${numPart2.join('')}`;
  }
}

function checkNumber (arrayD11) {
  let wrongNumber = false;
  for (let i = 0; i < arrayD11.length; i += 1) {
    if (arrayD11[i] > 9 || arrayD11[i] < 0) {
      wrongNumber = true;
      return wrongNumber;
    }
    let sameNumberLoop = 0;
    for (let i2 = i; i2 < arrayD11.length; i2 +=1) {
      if (arrayD11[i] === arrayD11[i2]) {   
        sameNumberLoop +=1;
        if (sameNumberLoop >=3) {
          wrongNumber = true;
          return wrongNumber;
        }
      }
    }
  }
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
