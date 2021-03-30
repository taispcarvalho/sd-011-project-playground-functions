
 
let pessoa = [];
function concatName(pessoa) {
}

let wins = 14;
let ties = 8;
let pointsWins = 0
let pointsTies = 0;
function footballPoints(wins,ties) {
if (wins !== 0) {
  pointsWins = 3*wins;
 if (ties !==0) {
  pointsTies = ties*1;
 }
let soma = pointsTies + pointsWins;
}console.log(soma)
  return (soma);
}


let pessoas = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(pessoas) {
for (let i = 0; i < concatName.length; i+=1) {
    if (concatName[i] === concatName[concatName.length - 1]) {
      let ultimoNome = concatName[i];
    }
    if (concatName[i] === concatName[0]) {
      let primeiroNome = concatName[0];
    }
  return (ultimoNome, ', ',primeiroNome);
    } 
  }