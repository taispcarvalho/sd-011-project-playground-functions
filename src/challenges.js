// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  else {
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
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  
  if(cat1Distance > cat2Distance){
    return "cat1"
  }else if(cat1Distance < cat2Distance){
    return "cat2"
  }else{
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

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
