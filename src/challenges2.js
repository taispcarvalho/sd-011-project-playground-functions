// Desafio 10
function techList(arr, nome) {

  for (i in arr) {
    arr[i] = { tech: arr[i], name: nome }
  }

  return arr
}

// Desafio 11
function generatePhoneNumber(arr) {
  str = arr.join('')

  function isNumThree() {

    for (n of arr) {
      re = eval(`/${n}/g`)
      if (str.match(re).length >= 3) {
        return true
      }
    }
    return false
  }

  function isNegative() {
    return str.match(/-\d/g) !== null
  }

  function isGreater9() {
    return str.match(/\d/g).length > 11
  }

  if (arr.length === 11) {
    if (!isGreater9() && !isNegative() && !isNumThree()) {
      str = str.replace(/^(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3')
      return str
    } else {
      return "não é possível gerar um número de telefone com esses valores"
    }
  } else {
    return "Array com tamanho incorreto."
  }
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Lados nulos ou negativos nao sao aceitos.")
    return false
  }

  if (a >= b + c || b >= c + a || c >= a + b) {
    console.log("Triangulo inexistente.")
    return false
  }

  if (a === b && b === c) {
    console.log("Triangulo equilátero.")
    return true
  } else if (a == b || b == c || c == a) {
    console.log("Triangulo isósceles.")
    return true
  } else {
    console.log("Triangulo escaleno.")
    return true
  }
}

// Desafio 13
function hydrate(str) {
  let number = 0
  numbers = str.match(/\d/g)

  for (num of numbers) {
    number += parseInt(num)
  }

  if (number <= 1) {
    return `${number} copo de água`
  }
  else {
    return `${number} copos de água`
  }

}

console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};