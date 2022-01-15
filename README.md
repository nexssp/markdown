# @nexssp/markdown

This module is experimental.

## Functions

- **toTerminal** (markdownString) - Convert markdown string to the terminal with colouring..

## Usage

```js
const { toTerminal } = require('@nexssp/markdown')

const testMarkdownContent = require('fs').readFileSync(`${__dirname}/test-file.md`).toString()

console.log(toTerminal(testMarkdownContent))
```

OR

```js
import { toTerminal } from '@nexssp/markdown'

import { readFileSync } from 'fs'
const testMarkdownContent = readFileSync(new URL('test-file.md', import.meta.url)).toString()

console.log(toTerminal(testMarkdownContent))
```

Example of markown for testing..

```md
# Header 1

This is a test markdown

## Header 2

<!-- See more at tests/test-file.md -->
```
