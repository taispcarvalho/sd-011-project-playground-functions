// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  else{
    return false;
  };
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
};

// Desafio 3
function splitSentence(array) {
  
  let newArray = array.split(" ");
  
  return newArray;
}

// Desafio 4
function concatName(stringArray) {
  
  let string = stringArray[stringArray.length - 1] + ', ' + stringArray[0];
  
  return string;
}

// Desafio 5
function footballPoints(wins, draws) {
  let points = (wins * 3) + draws;

  return points
}

// Desafio 6
function highestCount(numberArray) {
  
  let highestNumber = Math.max(...numberArray);
  let count = 0;

  for(let number of numberArray){
    if (number === highestNumber){
      count += 1;
    }
  }

  return count;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs((cat1 - mouse));
  let cat2Distance = Math.abs((cat2 - mouse));
  
  if(cat1Distance > cat2Distance){
    return 'cat2'
  }else if(cat1Distance < cat2Distance){
    return 'cat1'
  }else{
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {

let fizzBuzzArray = [];

  for(let arr of arrayNumbers){
    if(arr % 3 === 0 && arr % 5 !== 0){
        fizzBuzzArray.push("fizz")
    }
    else if(arr % 3 !== 0 && arr % 5 === 0){
        fizzBuzzArray.push("buzz")
    }
    else if(arr % 3 === 0 && arr % 5 === 0){
        fizzBuzzArray.push("fizzBuzz")
    }
    else{
        fizzBuzzArray.push("bug!")
    }
  }

  return fizzBuzzArray;
}

// Desafio 9
function encode(string) { 
  
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  
  return string

}

let palavra = encode('hi there')
console.log(palavra);

function decode(stringCoded) {

  stringCoded = stringCoded.replace(/1/g, 'a');
  stringCoded = stringCoded.replace(/2/g, 'e');
  stringCoded = stringCoded.replace(/3/g, 'i');
  stringCoded = stringCoded.replace(/4/g, 'o');
  stringCoded = stringCoded.replace(/5/g, 'u');

  return stringCoded
}

let palavraDecodificada = decode('h3 th2r2');
console.log(palavraDecodificada);

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
