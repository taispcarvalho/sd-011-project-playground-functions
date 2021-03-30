// Desafio 10
function techList(array) {
    if (array.length === 0) {
      return 'Vazio!';
    }
  
    let techListArray = [];
    let sortedTechNamesArray = array.sort();
  
    for (let techName of sortedTechNamesArray) {
      techListArray.push({
        tech: techName, 
        name: 'Gabriel',
      });
    }
    console.log(techListArray)
  }
  
  console.log(techList([]));
  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"]));


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
 
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
