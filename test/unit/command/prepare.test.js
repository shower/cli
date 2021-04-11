'use strict'

const { expect } = require('chai')
const { handler: prepare, messages } = require('../../../core/command/prepare')

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
})
