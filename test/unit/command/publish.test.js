'use strict'

const { expect } = require('chai')
const { handler: publish, messages } = require('../../../core/command/publish')

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
})
