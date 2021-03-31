// Desafio 10
function techList(array, name) {
  for (let i in array) {
    array[i] = {
      tech: array[i],
      name: name
    }
  }

  array.sort(function(a, b) {
    let techA = a.tech.toLowerCase();
    let techB = b.tech.toLowerCase();

    if (techA < techB) {
      return -1;
    }
    if (techA > techB) {
      return 1;
    }

    return 0;
    });
    // Inspirado no código do site http://www.javascriptkit.com/javatutors/arraysort2.shtml

  return array;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
