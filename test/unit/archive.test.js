'use strict'

const { expect } = require('chai')
const { handler: archive, messages } = require('../../core/command/archive')

describe('Serve command', () => {
  describe('Types matching', () => {
    it('Must be function', () => {
      expect(typeof archive).to.be.eq('function')
    })
  })
  describe('Interface', () => {
    it('Messages must provided "start" and "end" messages', () => {
      const { start, end } = messages({ output: '' })

      expect(typeof start).to.be.eq('string')
      expect(typeof end).to.be.eq('string')
    })
  })
})
