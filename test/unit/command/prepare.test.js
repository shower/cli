'use strict'

const { expect } = require('chai')
const { handler: prepare, messages } = require('../../../core/command/prepare')

describe('Serve command', () => {
  describe('Types matching', () => {
    it('Must be function', () => {
      expect(typeof prepare).to.be.eq('function')
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
