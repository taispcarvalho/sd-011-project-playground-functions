// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base,height) {
  return (base * height)/2
}
console.log(calcArea(5, 10));

// Desafio 3
//https://www.w3schools.com/jsref/jsref_split.asp//
function splitSentence(sentence) {
return sentence.split(" ");
}
console.log(splitSentence('Vivian Maria Braga'));

// Desafio 4
function concatName(names) {
  return (names[names.length-1] + ', ' +names[0]);
}
console.log(concatName(['Vivian', 'Maria', 'Braga']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties;
}
console.log(footballPoints(14,8));

// Desafio 6
function highestCount(numbers) {
  if (numbers[0] > numbers[1]) {
    let highest =  numbers[0];
    for (index = 2; index < numbers.length; index += 1) {
      if (numbers[index] > highest) {
        return numbers[index];
  } else {
    let highest =  numbers[1];
    for (index = 2; index < numbers.length; index += 1) {
      if (numbers[index] > highest) {
       return numbers[index];
  }
}

console.log(highestCount([2, 1, 3]));







// Desafio 7
function catAndMouse([mouse, cat1, cat2]) {
   if (cat1 - mouse === cat2 - mouse) {
    return 'os gatos se trobam e o rato foge';
   } else if (cat1 - mouse < cat2 - mouse) {
     return 'cat1';
   } else {
     return 'cat2';
   }
}
console.log(catAndMouse([1, 4, 3]));

// Desafio 8
function fizzBuzz(numbers) {
 for (index = 0; index < numbers.length; index += 1) {
   if (numbers[index] % 3 === 0 || numbers[index] % 5) {

   }
 } 
}

[2, 15, 7, 9, 45]














// Desafio 9
function encode() {

}





var teste = 'ola, me chamo maran';
var outra = [];
for (index = 0; index<teste.length; index +=1) {
  if (teste[index] === 'a') {
    outra.push('1');
  } else if (teste[index] === 'e') {
      outra.push('2');
    } else if (teste[index] === 'i') {
        outra.push('3');
      } else if (teste[index] === 'o') {
          outra.push('4');
        } else if (teste[index] === 'u') {
            outra.push('5');
          } else {
              outra.push(teste[index]);
            }
  }

console.log(outra);


////////////////////////////////////////////
let letter = 'hi there';
let origin = '';

for (index = 0; index<letter.length; index+=1) {
  if (letter[index] === a) {
    origin.push = 1;
} else {
  origin.push = "teste"
}
console.log(origin);

/////////////////////////////////////////
var teste = ('eu vou tomar agua')

teste.push ('agora')
console.log(teste);

/////////////////////////////
let letter = 'hi there';
let origin = '';

for (index = 0; index<letter.length; index+=1) {
  origin = letter[index];
  console.log(origin)
} 
/////////////////////////////
let letter = "hi there";

for (let char of letter){
  console.log(char);
}
} 


a = 1
e = 2
i = 3
o = 4
u = 5

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
