'use strict'

const util = require('util')

const chai = require('chai')
const sinon = require('sinon')
var sinonChai = require('sinon-chai')

var expect = chai.expect
chai.use(sinonChai)

const { handler: create, builder, messages } = require('../../../core/command/create')

describe('Create command', () => {
  describe('types', () => {
    it('create must be a function', () => {
      expect(typeof create).to.be.eq('function')
    })
  })

  describe('interface', () => {
    it('messages must provided "end" message', () => {
      const { end } = messages({ directory: '' })

      expect(typeof end).to.be.eq('string')
    })
  })

  describe('builder', () => {
    const yargsOptions = {
      yes: {
        alias: ['y'],
        default: false,
        type: 'boolean'
      },
      force: {
        alias: ['f'],
        default: false,
        type: 'boolean'
      },
      'no-interactive': {
        alias: ['s'],
        default: false,
        type: 'boolean'
      },
      theme: {
        alias: ['t'],
        default: 'ribbon',
        type: 'list',
        choices: ['ribbon', 'material']
      },
      ratio: {
        alias: ['r'],
        default: '16:9',
        type: 'list',
        choices: ['16:9', '4:3']
      }
    }
    const yargsPositional = {
      directory: {
        default: 'slides',
        type: 'string'
      }
    }

    it('must be a function', () => {
      expect(typeof builder).to.be.eq('function')
    })

    it('must process yargs object into right one', () => {
      const yargs = {
        option: () => {},
        options: () => {},
        positional: () => {},
        checkPositional: () => {}
      }
      sinon.stub(yargs, 'options').callsFake(() => yargs)
      sinon.stub(yargs, 'option').callsFake((key) => yargsOptions[key])
      sinon.stub(yargs, 'positional').callsFake(() => yargs)
      sinon.stub(yargs, 'checkPositional').callsFake((key) => yargsPositional[key])
      const result = builder(yargs)

      expect(yargs.options.called).to.be.eq(true)
      expect(yargs.positional.called).to.be.eq(true)

      expect(util.isDeepStrictEqual(result.option('yes'), yargsOptions.yes)).to.be.eq(true)
      expect(util.isDeepStrictEqual(result.option('force'), yargsOptions.force)).to.be.eq(true)
      expect(util.isDeepStrictEqual(result.option('no-interactive'), yargsOptions['no-interactive'])).to.be.eq(true)
      expect(util.isDeepStrictEqual(result.option('theme'), yargsOptions.theme)).to.be.eq(true)
      expect(util.isDeepStrictEqual(result.option('ratio'), yargsOptions.ratio)).to.be.eq(true)
      expect(util.isDeepStrictEqual(result.checkPositional('directory'), yargsPositional.directory)).to.be.eq(true)
    })
  })
})
