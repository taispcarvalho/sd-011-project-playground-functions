// Desafio 10
function techList(techname, nome) {
  let tech = techname.sort();
  let output = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    let object = {
      tech: String,
      name: String,
    };
    let objeto = Object.create(object);
    objeto.tech = tech[index];
    objeto.name = nome;
    output.push(objeto);
  } return output;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// lado1 < lado2 + lado3 && lado > abs(lado2 - lado3)
function triangleCheck(lineA, lineB, lineC) {
  return (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC));
}

// Desafio 13
function checkNumber(string) {
  return (string - (string - 1) === 1);
}

function hydrate(frase) {
  let frase2 = frase.replace(/ /g, '');
  let quant = 0;
  let agua = '';

  for (let index = 0; index < frase2.length; index += 1) {
    if (checkNumber(frase2[index])) {
      quant += Number(frase2[index]);
    } else if (quant <= 1) {
      agua = ' copo de água';
    } else {
      agua = ' copos de água';
    }
  } return quant + agua;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
