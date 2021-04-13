'use strict'

const util = require('util')

const chai = require('chai')
const sinon = require('sinon')
var sinonChai = require('sinon-chai')

var expect = chai.expect
chai.use(sinonChai)

const { handler: serve, builder } = require('../../../core/command/serve')

describe('Serve command', () => {
  describe('types', () => {
    it('serve must be a function', () => {
      expect(typeof serve).to.be.eq('function')
    })
  })

  describe('builder', () => {
    const yargsOptions = {
      open: {
        alias: 'o',
        type: 'bool',
        default: false,
        describe: 'Open browser'
      },
      port: {
        alias: 'p',
        type: 'number',
        default: 8080,
        describe: 'Listening Port'
      },
      ui: {
        type: 'bool',
        default: false,
        describe: 'Whether to run BrowserSync UI'
      },
      notify: {
        type: 'bool',
        default: false,
        describe: 'Whether to show BrowserSync notifications'
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
      expect(util.isDeepStrictEqual(result.option('open'), yargsOptions.open)).to.be.eq(true)
      expect(util.isDeepStrictEqual(result.option('port'), yargsOptions.port)).to.be.eq(true)
      expect(util.isDeepStrictEqual(result.option('ui'), yargsOptions.ui)).to.be.eq(true)
      expect(util.isDeepStrictEqual(result.option('notify'), yargsOptions.notify)).to.be.eq(true)
    })
  })
})
