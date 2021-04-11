'use strict'

const { expect } = require('chai')
const { handler: archive, messages } = require('../../../core/command/archive')

describe('archive command', () => {
  describe('types matching', () => {
    it('must be function', () => {
      expect(typeof archive).to.be.eq('function')
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
