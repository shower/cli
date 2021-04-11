'use strict'

const chai = require('chai')

const expect = chai.expect

const { handler: archive, builder, messages } = require('../../../core/command/archive')

describe('Archive command', () => {
  describe('types', () => {
    it('archive must be a function', () => {
      expect(typeof archive).to.be.eq('function')
    })
  })

  describe('interface', () => {
    it('messages must provided "start" and "end" messages', () => {
      const { start, end } = messages({ output: '' })

      expect(typeof start).to.be.eq('string')
      expect(typeof end).to.be.eq('string')
    })
  })

  describe('builder', () => {
    it('builder must be a function', () => {
      expect(typeof builder).to.be.eq('function')
    })

    it('builder must process yargs object', () => {
      const obj = {
        options: (yargsOptions) => {
          return yargsOptions
        }
      }
      const yargsOptions = {
        output: {
          alias: 'o',
          type: 'string',
          default: 'presentation.zip',
          describe: 'Archive name'
        },
        files: {
          alias: 'f',
          array: true,
          type: 'string',
          describe: 'List of files that will get the build'
        }
      }
      expect(builder(obj).output.alias).to.be.eq(yargsOptions.output.alias)
      expect(builder(obj).output.type).to.be.eq(yargsOptions.output.type)
      expect(builder(obj).output.default).to.be.eq(yargsOptions.output.default)
      expect(builder(obj).output.describe).to.be.eq(yargsOptions.output.describe)
      expect(builder(obj).files.alias).to.be.eq(yargsOptions.files.alias)
      expect(builder(obj).files.array).to.be.eq(yargsOptions.files.array)
      expect(builder(obj).files.type).to.be.eq(yargsOptions.files.type)
      expect(builder(obj).files.describe).to.be.eq(yargsOptions.files.describe)
    })
  })
})
