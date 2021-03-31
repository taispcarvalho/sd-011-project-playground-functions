function catAndMouse(mouse, cat1, cat2) {
  mouse = 0;
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;
  let resultado = '';
  if (distanciaCat2 < distanciaCat1) {
    resultado = 'cat2';
    console.log(resultado);
  } else if (distanciaCat2 > distanciaCat1) {
    resultado = 'cat1';
    console.log(resultado);
  } else {
    resultado = 'os gatos trombam e o rato foge';
    console.log(resultado);
  }
  return resultado;
}