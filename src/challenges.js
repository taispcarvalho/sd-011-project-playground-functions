// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true) {
   return true
  } else {
   return false
 }
}
// Desafio 2
function calcArea(base,height) {
 var resul = (base * height)/2
 return resul
}

// Desafio 3
function splitSentence(string) {
  var arrayOfStrings = string.split(' ')
  return arrayOfStrings;
}

// Desafio 4
function concatName(firstArray) {
  return `${firstArray[firstArray.length - 1]}, ${firstArray[0]}`;
}

// Desafio 5
function footballPoints(wins,ties) {
  var total = (wins * 3) + ties
  return total;
}

// Desafio 6
function highestCount(array) {
  let largo = Math.max(...array);
  let tamanho = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === largo) {
      tamanho += 1;
    }
  }
  return tamanho;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let distancia1;
  let distancia2;
  let resultado = '';
  if (cat1 < mouse) {
    distancia1 = mouse - cat1;
  } else {
    distancia1 = cat1 - mouse;
  }
  if (cat2 < mouse) {
    distancia2 = mouse - cat2;
  } else {
    distancia2 = cat2 - mouse;
  }
  if (distancia1 < distancia2) {
    resultado = 'cat1';
  } else if (distancia2 < distancia1) {
    resultado = 'cat2';
  }else{
  resultado = 'os gatos trombam e o rato foge';
}
return resultado
}

console.log (catAndMouse(5,3,6))


// Desafio 8
function fizzBuzz(array) {
    let newArray = [];
   for (let index = 0; index < array.length; index+=1) {
      if (array[index] % 5 === 0 && array[index] % 3 === 0) {
        newArray.push('fizzBuzz');
      } else if (array[index] % 3 === 0) {
        newArray.push('fizz');
      } else if (array[index] % 5 === 0) {
        newArray.push('buzz');
      } else {
        newArray.push('bug!');
      }
    }
    return newArray;
}
console.log(fizzBuzz(3,43,4,5))
// Desafio 9

function encode(code) {
  let codigo = [];
  for (let index = 0; index < code.length; index+=1) {
    if (code[index] === 'a') {
      codigo.push('1')
    }else if (code[index] === 'e') {
      codigo.push('2')
    }else if (code[index] == 'i') {
      codigo.push('3');
    }else if (code[index] == 'o') {
      codigo.push('4')
    }else if (code[index] == 'u') {
      codigo.push('5')
    }else{
      codigo.push(code[index])
    }     
  }
  return codigo.join('');
}

function decode(code) {
  let codigo = [];
  for (let index = 0; index < code.length; index+=1) {
    if (code[index] === '1') {
      codigo.push('a')
    }else if (code[index] === '2') {
      codigo.push('e')
    }else if (code[index] == '3') {
      codigo.push('i');
    }else if (code[index] == '4') {
      codigo.push('o')
    }else if (code[index] == '5') {
      codigo.push('u')
    }else{
      codigo.push(code[index])
    }     
  }
  return codigo.join('');
}

console.log(decode("h3 th2r2"))


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
