'use strict'

const util = require('util')

const chai = require('chai')
const sinon = require('sinon')
var sinonChai = require('sinon-chai')

var expect = chai.expect
chai.use(sinonChai)

const { handler: prepare, builder, messages } = require('../../../core/command/prepare')

describe('Prepare command', () => {
  describe('types', () => {
    it('prepare must be a function', () => {
      expect(typeof prepare).to.be.eq('function')
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
        default: 'prepared',
        describe: 'In which folder will the prepared presentation be written'
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
