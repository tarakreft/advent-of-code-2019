const fs = require('fs')

function readFile(fileName) {
  return fs.readFileSync(fileName, 'utf8')
}

function readFileAndSplitNewline(fileName) {
  const data = readFile(fileName);
  return data.split('\n')
}

module.exports = { readFile, readFileAndSplitNewline }