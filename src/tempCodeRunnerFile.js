function techList(array, name) {
  let test = [];
  if (array.length === []) {
    return 'Vazio!';
  }
  if (array !== []) {
    for (let tec of array) {
      test.push({ tech: tec, nome: name });
    }
  }
  return (test);
}
let tecs = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
console.log(techList(tecs, 'Islene'));
