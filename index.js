const writeFile = require('./ writeFile')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'name',
    message:
      'Which functions and files would you like to create? Please seperate by comma.',
  },
  {
    type: 'checkbox',
    name: 'fileTypes',
    message: 'Please select a file type.',
    choices: [{ name: 'component' }, { name: 'spec' }, { name: 'stories' }],
    validate(answer) {
      if (answer.length < 1) {
        return 'You must choose at least one file.'
      }

      return true
    },
  },
]

inquirer.prompt(questions).then(answers => {
  const names = answers['name'].split(',').map(el => el.trim())
  names.forEach(name => writeFile(name))
  console.log(answers)
})
