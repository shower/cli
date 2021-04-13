'use strict'

const util = require('util')

const chai = require('chai')
const sinon = require('sinon')
var sinonChai = require('sinon-chai')

var expect = chai.expect
chai.use(sinonChai)

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

    it('must be a function', () => {
      expect(typeof builder).to.be.eq('function')
    })

    it('must process yargs object into right one', () => {
      const yargs = {
        option: () => {},
        options: () => {}
      }
      sinon.stub(yargs, 'options').callsFake(() => yargs)
      sinon.stub(yargs, 'option').callsFake((key) => yargsOptions[key])
      const result = builder(yargs)

      expect(yargs.options.called).to.be.eq(true)
      expect(util.isDeepStrictEqual(result.option('output'), yargsOptions.output)).to.be.eq(true)
      expect(util.isDeepStrictEqual(result.option('files'), yargsOptions.files)).to.be.eq(true)
    })
  })
})
