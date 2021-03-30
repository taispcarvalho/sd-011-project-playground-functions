// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let answer = [];
  let word = '';

  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] == ' ' || index == sentence.length - 1) {
      if (index == sentence.length - 1) {
        word += sentence[index];
      }
      answer.push(word);
      word = '';
    } else {
      word += sentence[index];
    }  
  }

  return answer;
}

// Desafio 4
function concatName(names) {
  let answerArray = [];

  for (let name of names) {
    if (names.indexOf(name) == 0 || names.indexOf(name) == names.length - 1) {
      answerArray.push(name);
    }
  }

  return answerArray[1] + ', ' + answerArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let numberFrequencies = [];

  for (let number of numbers) {
    if(!numberFrequencies[number]) {
      numberFrequencies[number] = 1;
    } else {
      numberFrequencies[number] += 1;
    }
  }

  return numberFrequencies[numberFrequencies.length - 1];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let answer = '';
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;

  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  }

  if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }

  if (distanceCat1 < distanceCat2) {
    answer = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    answer = 'cat2';
  } else {
    answer = 'os gatos trombam e o rato foge';
  }

  return answer;
}

// Desafio 8
function fizzBuzz(numbers) {
  let answer = [];

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 != 0) {
      answer.push('fizz');
    } else if (numbers[index] % 3 != 0 && numbers[index] % 5 === 0) {
      answer.push('buzz');
    } else if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      answer.push('fizzBuzz');
    } else {
      answer.push('bug!');
    }
  }

  return answer;
}

// Desafio 9
function encode(message) {
  let encodedMessage = '';

  for (let index = 0; index < message.length; index += 1) {
    if (message[index].toLowerCase() === message[index]) {
      switch (message[index]) {
        case 'a':
          encodedMessage += '1';
          break;
        case 'e':
          encodedMessage += '2';
          break;
        case 'i':
          encodedMessage += '3';
          break;
        case 'o':
          encodedMessage += '4';
          break;
        case 'u':
          encodedMessage += '5';
          break;
        default:
          encodedMessage += message[index];
      }
    }
  }

  return encodedMessage;
}

function decode(encodedMessage) {
  let decodedMessage = '';

  for (let index = 0; index < encodedMessage.length; index += 1) {   
    switch (encodedMessage[index]) {
      case '1':
        decodedMessage += 'a';
        break;
      case '2':
        decodedMessage += 'e';
        break;
      case '3':
        decodedMessage += 'i';
        break;
      case '4':
        decodedMessage += 'o';
        break;
      case '5':
        decodedMessage += 'u';
        break;
      default:
        decodedMessage += encodedMessage[index];
    }
  }

  return decodedMessage;
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
