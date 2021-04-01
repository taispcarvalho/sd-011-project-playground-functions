function triangleCheck(lineA, lineB, lineC) {
  let triaA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  let triaB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  let triaC = lineC < lineB + lineA && lineC > Math.abs(lineB - lineA);
  if (lineA !== 0 && lineB !== 0 && lineC !== 0) {
    return (triaA || triaB || triaC);
  }
}
console.log(triangleCheck(10, 6, 2));