const ansi = require('@nexssp/ansi')

const h6 = (text) => ansi.bold(ansi.gray(`    ${text}`))
const h5 = (text) => ansi.bold(ansi.gray(`   ${text}`))
const h4 = (text) => ansi.bold(ansi.gray(`  ${text}`))
const h3 = (text) => ansi.bold(ansi.blue(`${text}`))
const h2 = (text) => ansi.bold(ansi.cyan(`${text}`))
const h1 = (text) => ansi.bold(ansi.purple(`${text}`))
const bold = (text) => ansi.bold(`${text}`)
const italic = (text) => ansi.italic(`${text}`)
const strikethrough = (text) => ansi.strikethrough(`${text}`)

const toTerminal = (text) =>
  text
    .replace(/^###### (.*$)/gim, h6('$1'))
    .replace(/^##### (.*$)/gim, h5('$1'))
    .replace(/^#### (.*$)/gim, h4('$1'))
    .replace(/^### (.*$)/gim, h3('$1'))
    .replace(/^## (.*$)/gim, h2('$1'))
    .replace(/^# (.*$)/gim, h1('$1'))
    .replace(/\*\*\*(.*)\*\*\*/gim, bold(italic('$1')))
    .replace(/\*\*(.*)\*\*/gim, bold('$1'))
    .replace(/\*(.*)\*/gim, italic('$1'))
    .replace(/\~\~(.*)\~\~/gim, strikethrough('$1'))
    .trim()

module.exports = { toTerminal }
