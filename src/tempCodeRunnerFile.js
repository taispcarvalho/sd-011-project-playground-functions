function techList(array, name) {
  let test = [];
  if (array.length !== null || array.length === null) {
    for (let tec of array) {
      test.push({
        tech: tec,
        nome: name,
      });
    }
  } else return 'Vazio!';
  return (test);
}
let n = [0];
console.log(techList(n, 'Lucas'));