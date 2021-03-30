// Desafio 10
function techList(techies, name) {
  if (!techies.length) return 'Vazio!';
  return techies.reduce((acc, cur) => {
    acc.push({ tech: cur, name });
    return acc;
  }, []).sort((a, b) => a.tech.localeCompare(b.tech));
}

// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
}

// Desafio 13
function hydrate(str) {
  let waterCups = str.match(/\d+/g).reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  return `${waterCups} ${waterCups < 2 ? ' copo' : ' copos'} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
