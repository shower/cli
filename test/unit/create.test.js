'use strict'

const assert = require('assert')
const { handler: create, messages } = require('../../core/command/create')

describe('Serve command', () => {
  describe('Types matching', () => {
    it('Must be function', () => {
      assert.strictEqual(typeof create, 'function')
    })
  })
  describe('Interface', () => {
    it('Messages must provided "end" message', () => {
      const { end } = messages({ directory: '' })

      assert.strictEqual(typeof end, 'string')
    })
  })
})
