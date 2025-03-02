import { readFileSync } from 'fs'
import { parser } from 'keep-a-changelog'

const changelog = parser(readFileSync('CHANGELOG.md', 'utf8'))

const release = changelog.findRelease()

if (release.toString().split(/\r\n|\r|\n/).length <= 1) {
  throw new Error('No unreleased changes found in CHANGELOG.md')
}
