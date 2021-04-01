function compareTrue(bool1, bool2) {
  let expression = false;
  if (bool1 === true && bool2 === true) {
    expression = true;
  }
  return expression;
}
console.log(compareTrue(true, true));
