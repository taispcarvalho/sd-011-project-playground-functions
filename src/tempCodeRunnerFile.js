function highestCount(n, array) {
  n = array.length;
  array = [n];
  let maiorNumero = array[0];
  let contador = 0;
  for (let index = 1; index < n; index += 1) {
    if (array[index] > maiorNumero){
      maiorNumero = array[index];
    }
  }
  for (let indexCont = 1; indexCont < n; indexCont += 1) {
    if (array[indexCont] === maiorNumero){
      contador = contador + 1;
    } 
  }
  return contador 
}