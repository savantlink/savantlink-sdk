const fs = require('fs')
const { parser } = require('keep-a-changelog')

const changelog = parser(fs.readFileSync('CHANGELOG.md', 'utf8'))

const release = changelog.findRelease()

if (release.toString().split(/\r\n|\r|\n/).length <= 1) {
  throw new Error('No unreleased changes found in CHANGELOG.md')
}
