import { toTerminal } from '../'

import { readFileSync } from 'fs'
const testMarkdownContent = readFileSync(new URL('test-file.md', import.meta.url)).toString()

console.log(toTerminal(testMarkdownContent))
