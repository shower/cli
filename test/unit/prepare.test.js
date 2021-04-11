'use strict'

const assert = require('assert')
const { handler: prepare, messages } = require('../../core/command/prepare')

describe('Serve command', () => {
  describe('Types matching', () => {
    it('Must be function', () => {
      assert.strictEqual(typeof prepare, 'function')
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
