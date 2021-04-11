'use strict'

const { expect } = require('chai')
const { handler: pdf, messages } = require('../../../core/command/pdf')

describe('Pdf command', () => {
  describe('types', () => {
    it('pdf must be a function', () => {
      expect(typeof pdf).to.be.eq('function')
    })
  })
  describe('interface', () => {
    it('messages must provided "start" and "end" messages', () => {
      const { start, end } = messages({ file: '' })

      expect(typeof start).to.be.eq('string')
      expect(typeof end).to.be.eq('string')
    })
  })
})
