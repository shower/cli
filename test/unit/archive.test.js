'use strict'

const assert = require('assert')
const { handler: archive, messages } = require('../../core/command/archive')

describe('Serve command', () => {
  describe('Types matching', () => {
    it('Must be function', () => {
      assert.strictEqual(typeof archive, 'function')
    })
  })
  describe('Interface', () => {
    it('Messages must provided "start" and "end" messages', () => {
      const { start, end } = messages({ output: '' })

      assert.strictEqual(typeof start, 'string')
      assert.strictEqual(typeof end, 'string')
    })
  })
})
