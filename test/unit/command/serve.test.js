'use strict'

const { expect } = require('chai')
const { handler: serve } = require('../../../core/command/serve')

describe('Serve command', () => {
  describe('Types matching', () => {
    it('Must be function', () => {
      expect(typeof serve).to.be.eq('function')
    })
  })
})
