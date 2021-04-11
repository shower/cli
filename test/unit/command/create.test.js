'use strict'

const { expect } = require('chai')
const { handler: create, messages } = require('../../../core/command/create')

describe('Create command', () => {
  describe('types', () => {
    it('create must be a function', () => {
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
