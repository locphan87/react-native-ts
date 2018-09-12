/**
 * Get the latest git commit SHA
 * and write it to sha.json
 */

const fs = require('fs')

const fileName = __dirname + '/../sha.json'

const FORMAT = process.env.FORMAT || 'short'
const shaFormats = {
  short: 'git rev-parse --short HEAD',
  oneline: 'git show -s --oneline'
}
const COMMIT = require('child_process')
  .execSync(shaFormats[FORMAT])
  .toString()
  .trim()
const BUILD_TIME = require('child_process')
  .execSync('git log -1 --format=%cd')
  .toString()
  .trim()

const data = {
  COMMIT,
  BUILD_TIME
}
const output = JSON.stringify(data, null, 2)
console.log(output)

fs.writeFileSync(fileName, output)
