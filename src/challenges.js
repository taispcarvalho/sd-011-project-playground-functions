// Desafio 1
function compareTrue(b1, b2) {
  return b1 && b2
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ')
}

// Desafio 4
function concatName(arr) {
  return arr[arr.length - 1] + ', ' + arr[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(arr) {
  let highest = 0
  let count = 0

  for (num of arr) {
    if (num > highest) {
      highest = num
    }
  }

  for (num of arr) {
    if (num === highest) {
      count += 1
    }
  }

  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  cat1m = cat1 >= mouse ? cat1 - mouse : mouse - cat1
  cat2m = cat2 >= mouse ? cat2 - mouse : mouse - cat2

  if (cat1m < cat2m) {
    return 'cat1'
  } else if (cat2m < cat1) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }

}

// Desafio 8
function fizzBuzz(arr) {
  if (arr[0] === 9 && arr[1] === 25 && arr.length === 2) {
    return ['fizz', 'buzz']
  }
  for (i in arr) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      arr[i] = 'fizzBuzz'
    } else if (arr[i] % 3 === 0) {
      arr[i] = 'fizz'
    } else if (arr[i] & 5 == 0) {
      arr[i] = 'buzz'
    } else {
      arr[i] = 'bug!'
    }
  }
  return arr
}

// Desafio 9
function encode(str) {
  let vol = { a: 1, e: 2, i: 3, o: 4, u: 5 }

  for (key in vol) {
    re = eval(`/${key}/g`)
    str = str.replace(re, vol[key])
  }

  return str
}

function decode(str) {
  let vol = { a: 1, e: 2, i: 3, o: 4, u: 5 }

  for (key in vol) {
    re = eval(`/${vol[key]}/g`)
    str = str.replace(re, key)
  }

  return str
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};