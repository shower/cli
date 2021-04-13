'use strict'

const util = require('util')

const chai = require('chai')
const sinon = require('sinon')
var sinonChai = require('sinon-chai')

var expect = chai.expect
chai.use(sinonChai)

const { handler: pdf, builder, messages } = require('../../../core/command/pdf')

describe('Pdf command', () => {
  describe('types', () => {
    it('pdf must be a function', () => {
      expect(typeof pdf).to.be.eq('function')
    })
  })

  describe('interface', () => {
    it('messages must provided "start" and "end" messages', () => {
      const { start, end } = messages({ file: '' })

      expect(typeof start).to.be.eq('string')
      expect(typeof end).to.be.eq('string')
    })
  })

  describe('builder', () => {
    const yargsOptions = {
      output: {
        alias: 'o',
        type: 'string',
        default: 'index.pdf',
        describe: 'File name'
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
      expect(util.isDeepStrictEqual(result.option('files'), yargsOptions.files)).to.be.eq(true)
    })
  })
})
