// Desafio 1
function compareTrue(pinky, cerebro) {
  return pinky && cerebro;
  }

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let firstIndex = array[0];
  let lastIndex = array[array.length - 1];
  return (lastIndex + ', ' + firstIndex);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + ties);
  return (points);
}

// Desafio 6
function highestCount(arrayN) {
  var checkHighestNumber = Math.max.apply(null,arrayN);
  let checkRepetition = 0;
  for(index = 0; index < arrayN.length; index += 1){
  if(arrayN[index] === checkHighestNumber){
  checkRepetition +=1 ;
  }
  }
  return checkRepetition;
  }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if(Math.abs(distanceCat1) < Math.abs(distanceCat2)){
    return 'cat1';
  }else if(Math.abs(distanceCat2) < Math.abs(distanceCat1)){
    return 'cat2';
  }else if (Math.abs(distanceCat2) == Math.abs(distanceCat1)){
    return 'os gatos trombam e o rato foge';
  }

}


// Desafio 8
function fizzBuzz(numbers) {
  let newArray = [];
  for (const key of numbers) {
           if(key % 3 === 0 &&  key % 5 === 0){
            newArray.push('fizzBuzz');
         }else if(key % 3 === 0){
           newArray.push('fizz');
        }else if (key % 5 === 0){
          newArray.push('buzz');
        }else{
          newArray.push('bug!');
        }
        }
      return newArray;
      }

// Desafio 9
function encode(string) {
  /*let newString = string;
  let vogals = {
    a:1, e:2, i:3, o:4, u:5
  }
  for(let index = 0; index < string.length; index += 1){

  if(string = ('a')){
     newString.push ('a' = '1');
  }
  return newString
}*/
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
