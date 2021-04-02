// Desafio 10
function techList(arrTechNames, name1) {
  let arrTechNames2 = [];
  arrTechNames.sort();

  let result = '';

  if (arrTechNames.length === 0) {
    result = 'Vazio!';
  }

  for (let index = 0; index < arrTechNames.length; index += 1) {
    arrTechNames2[index] = {

      tech: arrTechNames[index],
      name: name1,
      };
      result = arrTechNames2;
  }

  return result;
}

/*/ Desafio 11
function generatePhoneNumber(arrNum) {
  //let arrNum2 = arrNum;
  let formNum = '';
  let arrNum2 = arrNum;
  arrNum.join('').split();
  
  
  // check array size
  if (arrNum.length !== 11) {
    formNum = 'Array com tamanho incorreto.';
    return formNum;
  } else {
    // print formated number
    for(let index = 0; index < arrNum2.length; index += 1) {
      if (formNum.length === 0) {
  
        formNum += '(' + arrNum2[0];
        
        formNum += arrNum2[1] + ') ';
        index += 1;
      } else if (formNum.length > 4 && formNum.length < 9) {
        formNum += arrNum2[index];
      } else if (formNum.length > 9 && formNum.length < 11) {
        formNum += '-' + arrNum2[index];
      } else {
        formNum += arrNum2[index];
      }
    }
  }
  if (checkArrNum(arrNum2) === true){
    formNum = 'não é possível gerar um número de telefone com esses valores';  
  }
  return formNum;

}
function checkArrNum(arr) {
  let count = 0;
  let repeat1 = [];
  let arrNum1 = arr;
  arrNum1 = arrNum1.sort();
  let newArr1 = [];
  let number1 = 0;
  let invalNum = false;
  
  for (let index1 = 0; index1 < arrNum1.length; index1 += 1) {
    if (arrNum1[index1] < 0 || arrNum1[index1] > 9) {
        invalNum = true;
    if (arrNum1[index1] === arrNum1[index1+1]) {
      
      repeat1.push(arrNum1[index1]);
      }
      for (let index2 = index1; index2 < arrNum1.length; index2 += 1) {
        if (repeat1[repeat1.length-1] === arrNum1[index2]) {
          newArr1.push(arrNum1[index1]);
        }
      }
      repeat1 = newArr1;
      
      if (count < repeat1.length) {
  
        count = repeat1.length;
        number1 = arrNum1[index1];
  
      }
      index1 += repeat1.length -1; 
      newArr1 = [];
    }
  }
  
  if (count > 2 || invalNum) {
    return true;
  }
  return false;
}
*/
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result;

  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    result = true;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    result = true;
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

// Desafio 13
function hydrate(words) {
  let addThem = 0;
  let reg = /\d+/g;

  let nums = words.match(reg);
  let outWords = '';

  for (let index = 0; index < nums.length; index += 1) {
    addThem += parseInt(nums[index]);
  }
  
  if (addThem === 1) {
    outWords = `${addThem} copo de água`;
  } else {
    outWords = `${addThem} copos de água`;
  }
  return outWords;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
