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
  if (arr.length !== 11) return 'Array com tamanho incorreto.';
  if (arr.some((value) => value < 0 || value > 9 || arr.filter((x) => x === value).length > 2)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return arr.join('').replace(/(\d\d)(\d{5})(\d{4})/g, '($1) $2-$3');
}

// Função Auxiliar da triangleCheck
function triangleCheckLine(a, b, c) {
  return a < (b + c) && a > Math.abs(b - c);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let firstLine = triangleCheckLine(lineA, lineB, lineC);
  let secondLine = triangleCheckLine(lineB, lineA, lineC);
  let thirdLine = triangleCheckLine(lineC, lineA, lineB);
  return firstLine && secondLine && thirdLine;
}

// Desafio 13
function hydrate(str) {
  let waterCups = str.match(/\d+/g).reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  return `${waterCups} ${waterCups < 2 ? 'copo' : 'copos'} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
