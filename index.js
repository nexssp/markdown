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
const link = (text, url) => ansi.blue(ansi.underscore(text)) + ' ' + ansi.gray(`(${url})`)

const toTerminal = (text) =>
  text
    // Headers
    .replace(/^###### (.*)$/gim, (_, t) => h6(t))
    .replace(/^##### (.*)$/gim, (_, t) => h5(t))
    .replace(/^#### (.*)$/gim, (_, t) => h4(t))
    .replace(/^### (.*)$/gim, (_, t) => h3(t))
    .replace(/^## (.*)$/gim, (_, t) => h2(t))
    .replace(/^# (.*)$/gim, (_, t) => h1(t))
    // Links (added this new section)
    .replace(/\[(.*?)\]\((.*?)\)/g, (_, text, url) => link(text, url))
    // Text formatting
    .replace(/\*\*\*(.*?)\*\*\*/g, (_, t) => bold(italic(t)))
    .replace(/\*\*(.*?)\*\*/g, (_, t) => bold(t))
    .replace(/\*(.*?)\*/g, (_, t) => italic(t))
    .replace(/~~(.*?)~~/g, (_, t) => strikethrough(t))
    .trim()

module.exports = { toTerminal }
