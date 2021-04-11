'use strict'

const { expect } = require('chai')
const { handler: publish, messages } = require('../../../core/command/publish')

describe('Serve command', () => {
  describe('Types matching', () => {
    it('Must be function', () => {
      expect(typeof publish).to.be.eq('function')
    })
  })
  describe('Interface', () => {
    it('Messages must provided "end" message', () => {
      const { end } = messages({})

      expect(typeof end).to.be.eq('string')
    })
  })
})
