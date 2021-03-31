// Desafio 10
function techList(techArr, name){
  let newArrTech = [];
  techArr = techArr.sort();
  if (techArr.length > 1) {
    for (let index = 0; index < techArr.length; index += 1) {
      let object = {
        tech: techArr[index],
        name: name,
      }
      newArrTech.push(object);
    }
  } else {
    return 'Vazio!'
  }
  return newArrTech;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

// Desafio 11
function repeatedNumberFinder(arrNumbers) {
  let repeatedNumber;
  let count = 0;
  for (let index = 0; index < arrNumbers.length; index += 1) {
    if (arrNumbers[index] === arrNumbers[index + 1]) {
      count += 1;
      if (count >= 3) {
        repeatedNumber = arrNumbers[index];
        return repeatedNumber;
      }
    }
  } 
}
console.log(repeatedNumberFinder([1, 2, 3, 4, 5, 3, 7, 3, 9, 3, 1]))

function generatePhoneNumber(arrNumbers) {
  let newStr = '';
  for (let index = 0; index < arrNumbers.length; index += 1) {
    if (arrNumbers[index] < 0 || arrNumbers[index] > 9)
    
    (index === 0 || index === 1) {
      newStr = newStr, '(', arrNumbers[1], arrNumbers[0], ')';
    } else if (index > 1 && index < 6) {
      newStr = newStr, arrNumbers[1], arrNumbers[2], arrNumbers[3], arrNumbers[4], '-';
    } else if (index === 6 && index < arrNumbers) {
      newStr = newStr, arrNumbers[6], arrNumbers[7], arrNumbers[8], arrNumbers[9];
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
