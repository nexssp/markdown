const { toTerminal } = require('..')

const testMarkdownContent = require('fs').readFileSync(`${__dirname}/test-file.md`).toString()

console.log(toTerminal(testMarkdownContent))
