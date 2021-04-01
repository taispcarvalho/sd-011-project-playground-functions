function triangleCheck(lineA, lineB, lineC) {
let triaA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
let triaB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
let triaC = lineC < lineB + lineA && lineC > Math.abs(lineB - lineA);

  if(triaA|| triaB || triaC) {
    let resultado = true;
  } else {
    let resultado = false;
  }
  return resultado;
}
console.log(triangleCheck(10, 14, 8))