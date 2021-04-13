'use strict'

const util = require('util')

const chai = require('chai')
const sinon = require('sinon')
var sinonChai = require('sinon-chai')

var expect = chai.expect
chai.use(sinonChai)

const { handler: publish, builder, messages } = require('../../../core/command/publish')

describe('Publish command', () => {
  describe('types', () => {
    it('publish must be a function', () => {
      expect(typeof publish).to.be.eq('function')
    })
  })

  describe('interface', () => {
    it('messages must provided "end" message', () => {
      const { end } = messages({})

      expect(typeof end).to.be.eq('string')
    })
  })

  describe('builder', () => {
    const yargsOptions = {
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
      expect(util.isDeepStrictEqual(result.option('files'), yargsOptions.files)).to.be.eq(true)
    })
  })
})
