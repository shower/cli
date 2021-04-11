'use strict'

const { expect } = require('chai')
const { handler: create, messages } = require('../../core/command/create')

describe('Serve command', () => {
  describe('Types matching', () => {
    it('Must be function', () => {
      expect(typeof create).to.be.eq('function')
    })
  })
  describe('Interface', () => {
    it('Messages must provided "end" message', () => {
      const { end } = messages({ directory: '' })

      expect(typeof end).to.be.eq('string')
    })
  })
})
