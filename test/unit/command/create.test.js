'use strict'

const { expect } = require('chai')
const { handler: create, messages } = require('../../../core/command/create')

describe('create command', () => {
  describe('types matching', () => {
    it('must be function', () => {
      expect(typeof create).to.be.eq('function')
    })
  })
  describe('interface', () => {
    it('messages must provided "end" message', () => {
      const { end } = messages({ directory: '' })

      expect(typeof end).to.be.eq('string')
    })
  })
})
