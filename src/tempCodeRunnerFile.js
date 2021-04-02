function techList(array, name) {
  let test = [];
  if (array !== null) {
    for (let tec of array) {
      test.push({
        tech: tec,
        nome: name,
      });
    }
  } else return 'Vazio!';
  return (test);
}
let n = ['CSS', 'JS'];
console.log(techList(n, 'Lucas'));