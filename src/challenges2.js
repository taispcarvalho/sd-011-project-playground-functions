// Desafio 10
function techList(list, name) {
  if (list.length === 0) {
    return 'Vazio!';
  }

  let result = [];
  list = list.sort();
  for (let technology of list) {
    result.push({
      tech: technology,
      name,
    });
  }
  return result;
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
