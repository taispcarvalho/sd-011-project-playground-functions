function highestCount(array) {
  let maiorNumero = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  let contador = 0;
    for (let indexCont = 0; indexCont < array.length; indexCont += 1) {
    if (array[indexCont] === maiorNumero) {
      contador = contador + 1;
    }
  }
  return contador;
}
function arraytest(){
if (test = [9, 1, 2, 3, 9, 5, 7]) {
  let resultado = console.log(highestCount(test));
  };

return arraytest;;
}
