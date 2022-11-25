const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

let numberOfAttempts = 0;
const startRange = 0;
const endRange = 100;
const hiddenNumber = Math.floor(Math.random() * (endRange - startRange + 1) + startRange)

const printGreetingMessage = () => {
  console.log(`Загадано число в диапазоне от ${startRange} до ${endRange}`)
}

const rl = readline.createInterface({ input, output });

const guessNumberGame = () => {
  return rl.question('', (answer) => {

    if (isNaN(answer) || !answer) {
      console.log('Введите число')
      return guessNumberGame()
    }

    const answerToNumber = Number(answer)

    if (answerToNumber === hiddenNumber) {
      console.log(`Отгадано число ${hiddenNumber}! \nКоличество попыток: ${numberOfAttempts}`)
      return rl.close();
    }

    if (answerToNumber < hiddenNumber) {
      console.log('Больше')
      numberOfAttempts += 1
      return guessNumberGame()
    }

    if (answerToNumber > hiddenNumber) {
      console.log('Меньше')
      numberOfAttempts += 1
      return guessNumberGame()
    }
  });
}

printGreetingMessage()
guessNumberGame()
