// Desafio 10
function techList(array, name) {
  let test = [];
  if (array.length <= 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < array.length; index += 0) {
    test.push = ({
      tech: array[index],
      name: name,
    }
    );
  }
  return techList(test);
}

// Desafio 11
function generatePhoneNumber(array) {
let resultado = '';
let numeroRepetido = [];
  if(array.length !== 11) {
    resultado =  ('Array com tamanho incorreto.')
  }
  for (let numeroZero of array) {
    if (numeroZero < 0 || numeroNove > 9) {
    resultado = ('não é possível gerar um número de telefone com esses valores');
    }
  }
  for (let index of array) {
    for (let indexNumeroRepetido of array) {
      if (indexNumeroRepetido === index){
        numeroRepetido [index] = (numeroRepetido[index] || 0) + 1;
      } if (numeroRepetido[index] >= 3) {
    let resultado = ('não é possível gerar um número de telefone com esses valores');
     }
    }
  }
  return generatePhoneNumber(resultado);
}

function numeroTelefone(array) {
let numeroDeTelefone = generatePhoneNumber(array);
let primeirosNumero = ('(' + array[0] + array[1] + ') ');
let numeroMeio = (array[2]+ array[3]+ array[4]+ array[5]+ array[6] + ' - ');
let ultimoNumero = (array[7]+ array[8]+ array[9]+ array[10]+ array[11]);
let numeroTotal = primeirosNumero + numeroMeio + ultimoNumero;
  
  return numeroTelefone(numeroTotal);
}

console.log(generatePhoneNumber(3, 2, 6, 5, 8, 9, 7, 8));

// Desafio 12 - ok
function triangleCheck(lineA, lineB, lineC) {
  if ( lineA !== 0 && lineB !== 0 && lineC !== 0 ) {  
  let triaA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  let triaB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  let triaC = lineC < lineB + lineA && lineC > Math.abs(lineB - lineA);      
  return  ( triaA  ||  triaB  ||  triaC ) ;
  }
}  
console.log(triangleCheck(10, 6, 10));

// Desafio 13
function hydrate(string) {
  let numeroCopos = string.match(/\d+/g).map(Number);
  let somaCopos = 0;
  let resultado = '';
  for (let index = 0; index < numeroCopos.length; index += 1) {
    somaCopos += numeroCopos[index];
  }
  if(somaCopos > 1) {
    return (somaCopos + ' copos de água');
  } else {
    return (somaCopos + ' copo de água');
  }
}
console.log(hydrate('1 cerveja'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
