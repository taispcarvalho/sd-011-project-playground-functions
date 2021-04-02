// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let arrayTech = [];
  let items = tech.sort();
  
  if (items.length>0){
    for(let index in items){
      arrayTech[index]={
        tech: items[index],
        name: name
      }
    }
    return arrayTech;
  }else {
    return ('Vazio!')
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  //https://www.devmedia.com.br/iniciando-expressoes-regulares/6557#:~:text=Express%C3%B5es%20Regulares%20s%C3%A3o%20padr%C3%B5es%20de,sequ%C3%AAncias%20de%20caracteres%20no%20texto.

  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
  if(array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for(let index = 0; index < array.length; index += 1) {
    if(array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let count = 0;
    for(let index2 = 1; index2 < array.length; index2 += 1) {
      if(array[index] === array[index2]) {
        count += 1;
      }
      if (count > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return array.join('').replace(/^(\d{2})(\d{5})(\d)/g, '($1) $2-$3');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA <= 0 || lineB <= 0 || lineC <= 0){
    return false;
  } else if (lineA >= lineB + lineC){
    return false;
  } else if (lineB >= lineA + lineC){
    return false;
  } else if (lineC >= lineA + lineB){
    return false;
  }else {
    return true;
  }
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt

  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt

  //https://www.w3schools.com/jsref/jsref_parseint.asp
  let h2o = 0;

  for(let index in string){
    if(string[index] === '1' || string[index] === '2' || string[index] === '3' || string[index] === '4' || string[index] === '5' || string[index] === '6' || string[index] === '7' || string[index] === '8' || string[index] === '9' ){
      h2o = h2o + parseInt(string[index]);
    }
  }
  if(h2o === 1){
    return h2o + ' copo de água';
  }else {
    return h2o + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};