'use strict'

const { expect } = require('chai')
const { handler: serve } = require('../../../core/command/serve')

describe('serve command', () => {
  describe('types matching', () => {
    it('must be function', () => {
      expect(typeof serve).to.be.eq('function')
    })
  })
})
