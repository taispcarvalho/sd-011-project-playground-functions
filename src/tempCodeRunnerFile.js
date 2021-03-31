function catAndMouse(mouse, cat1, cat2) {
  mouse = 0;
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;
  let resultado = '';
  if (distanciaCat2 < distanciaCat1 ) {
  resultado = 'cat2';
  } else if (distanciaCat2 > distanciaCat1) {
  resultado = 'cat1';
  } else {
  resultado = 'os gatos trombam e o rato foge'; 
  }
  return resultado;
}
console.log(catAndMouse(1,0,2));
