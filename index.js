const writeFile = require('./ writeFile')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Which functions and files would you like to create? Please seperate by comma.',
  answer => {
    answer
      .split(',')
      .map(file => file.trim())
      .forEach(file => writeFile(file))
  }
)
