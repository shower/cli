'use strict'

const { expect } = require('chai')
const { handler: serve } = require('../../../core/command/serve')

describe('Serve command', () => {
  describe('types', () => {
    it('serve must be a function', () => {
      expect(typeof serve).to.be.eq('function')
    })
  })
})
